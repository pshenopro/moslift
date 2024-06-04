import app from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, runTransaction  } from "firebase/firestore";

const port = 8080
const server = app()
const bot = new Telegraf('7013399013:AAEufPc3IsYlRtB6sCEz06YOUJZAUS6TZF4', {
  handlerTimeout: Infinity,
})

const firebaseConfig = {
  databaseURL: '/',
  apiKey: "AIzaSyAapmjw2ak4GCZL1GUrHNZR3AFgrPgejXM",
  authDomain: "liftdom-service.firebaseapp.com",
  projectId: "liftdom-service",
  storageBucket: "liftdom-service.appspot.com",
  messagingSenderId: "327847538611",
  appId: "1:327847538611:web:6364eb07fd0a42c934e5c6",
  measurementId: "G-D6S1468MEH",
}
const appNode = initializeApp(firebaseConfig);
const db = getFirestore(appNode);

bot.command('start', async ctx => {
  // ctx.chat.id
  if ('blya_zaebal1' === ctx.from.username) {
    ctx.reply(`НУ Здарова гандосик ${ctx.from.first_name || ctx.from.username} ❤, не думал такого педика тут встретить!`);
  } else if ('cult_tape' === ctx.from.username) {
    ctx.reply(`Ну привет Даха какаха))) ❤`);
  } else {
    ctx.reply(`Здарова: ${ctx.from.first_name || ctx.from.username} ❤`);
  }

  ctx.reply('Если хочешь узнать что я умею делать, то введи /bot')

  if (!ctx.from.is_bot) {

    await runTransaction(db, async transaction => {
      const sfDoc = await transaction.get(doc(db, "mails", "botUsers"));
      const USERS = sfDoc.data().users
      if (!USERS.filter(user => user.chatId === ctx.chat.id).length) {
        transaction.update(doc(db, "mails", "botUsers"), { users: USERS.concat({
            chatId: ctx.chat.id,
            name: ctx.from.first_name || ctx.from.username,
            user: ctx.from.username
          }) });
      }
    })

  }
})

bot.command('bot', ctx => {
  if ('blya_zaebal1' === ctx.from.username) {
    ctx.reply(`Слышь, давай вали отсюда, нах вообще нажал на меня! иди лучше подрочи, ну или сиди тут и смотри на заявки которые падают с сайта`);
  } else if ('cult_tape' === ctx.from.username) {
    ctx.reply(`Купи пивка по братски, возможно будут падать заявки с сайта`);
  } else {
    ctx.reply(`Подписка на уведомления, теперь ты видишь тут копии заявок с сайта!`);
  }
})

bot.on(message('text'), ctx => {
  ctx.reply('test')
})

bot.launch()

server.use(cors())
server.use(app.json())
server.use(bodyParser.json({ limit: '10mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

server.post('/email', async (req, res) => {
  let USERS = []

  await runTransaction(db, async transaction => {
    const sfDoc = await transaction.get(doc(db, "mails", "botUsers"));
    USERS = sfDoc.data().users
  })

  if (!USERS.length) {
    res.status(200).send('DONE')
  }

  for (const user of USERS) {

    const messageText = `
        Hello! ${ user.name};
        ..................... 
        <b>Тема</b> - ${req.body.subject}
        
        <b>Имя</b> - ${req.body.name || 'пусто'}
        
        <b>Почта</b> - ${req.body.email || 'пусто'}
        
        <b>Услуга</b> - ${req.body.usluga || 'пусто'}
        
        <b>Описание</b> - ${req.body.text || 'пусто'}
      `;

    if (user.chatId) {
      bot.telegram.sendMessage(user.chatId, messageText, { parse_mode: 'HTML' })
    }
  }

  res.status(200).send('DONE')
})

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port - ' + port);
  }
})
