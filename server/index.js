import app from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'

const port = 8080
const server = app()

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'liftdomservice@mail.ru',
    pass: 'PnK5gygstPU1ajAUvvBV'
  }
})

server.use(app.json())
server.use(cors())
server.use(bodyParser.json({ limit: '10mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

server.post('/email', (req, res) => {
  transporter.sendMail({
    from: 'liftdomservice@mail.ru',
    to: 'liftdomservice@mail.ru',
    subject: 'Заявка',
    text: req.body.text
  }, (err, info) => {
    if (err) {
      res.status(200).send(err)

      return
    }

    res.status(200).send('DONE')
  })
})

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port' + port);
  }
})
