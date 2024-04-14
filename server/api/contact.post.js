import nodemailer from 'nodemailer'

// Or use SMTP if you feel like
const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event) // Pass params via JSON in the POST request

  transporter.sendMail({
    from: body.email,
    to: 'n.psheno@gmail.com',
    subject: 'New contact form message',
    text: body.text
  })
})
