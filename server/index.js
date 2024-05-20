import app from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'

const port = 8080
const server = app()

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'shyann.nikolaus@ethereal.email',
    pass: 'xTBUgjeeg7d1CKpfNe'
  },
  tls: { rejectUnauthorized: false }
})

server.use(app.json())
server.use(cors())
server.use(bodyParser.json({ limit: '10mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

server.post('/email', (req, res) => {
  transporter.sendMail({
    from: 'shyann.nikolaus@ethereal.email',
    to: 'nikin-z@yandex.ru',
    subject: req.body.subject,
    html: req.body.html
  }, (err, info) => {
    if (err) {
      res.status(200).send(err)

      return
    }

    res.status(200).send('DONE')
  })
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port - ' + port);
  }
})
