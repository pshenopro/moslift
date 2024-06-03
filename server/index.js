import app from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const port = 8080
const server = app()
const bot = new Telegraf('7013399013:AAEufPc3IsYlRtB6sCEz06YOUJZAUS6TZF4', {
  handlerTimeout: Infinity,
})

const USER = {
  chatId: '',
  name: ''
}

bot.command('start', ctx => {
  // ctx.chat.id
  ctx.reply(`Здарова: ${ctx.from.first_name || ctx.from.username} ❤`);
  const userId = ctx.from.id;
  const username = ctx.from.username || 'No username';
  const firstName = ctx.from.first_name || 'No first name';
  const lastName = ctx.from.last_name || 'No last name';

  USER.chatId = ctx.chat.id
  USER.name = ctx.from.first_name || ctx.from.username

  // const message = `
  //   Here is your account information:
  //   - ID: ${userId}
  //   - Username: ${username}
  //   - First Name: ${firstName}
  //   - Last Name: ${lastName}
  //   `;
  //
  // ctx.reply(message);
})

bot.on(message('text'), ctx => {
  ctx.reply('test')
})

// const chatId = '151937343'
// const messageText = `Hello! ${ USER.name}`
// bot.telegram.sendMessage(USER.chatId, messageText)
//   .then(() => {
//     console.log(`Message sent to chat ID: ${ USER.chatId}`);
//   })
//   .catch((err) => {
//     console.error(`Failed to send message to chat ID: ${ USER.chatId}. Error: ${err}`);
//   })

bot.launch()

server.use(cors())
server.use(app.json())
server.use(bodyParser.json({ limit: '10mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

server.post('/email', (req, res) => {
  console.log(req.body);
  const messageText = `Hello! ${ USER.name}`
  bot.telegram.sendMessage(USER.chatId, messageText)
    .then(() => {
      console.log(`Message sent to chat ID: ${ USER.chatId}`);
    })
    .catch((err) => {
      console.error(`Failed to send message to chat ID: ${ USER.chatId}. Error: ${err}`);
    }).finally(() => {
    res.status(200).send('DONE')
  })
})

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port - ' + port);
  }
})
