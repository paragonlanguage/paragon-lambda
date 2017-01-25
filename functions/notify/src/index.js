import mailgun from 'mailgun-js'
import ganerateEmail from './generateEmail.js'

export default (e, ctx, cb) => {
  const apiKey = 'key-8e87b0928f5b659f2a66c44ffbcff6e4'
  const domain = 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'

  const mailunAgent = mailgun({apiKey, domain})
  const htmlEmail = ganerateEmail()

  const data = {
    from: 'Excited User <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
    to: 'paragonlanguage@mailinator.com',
    subject: 'Hi, we have got a new inquiry, Tony',
    html: htmlEmail
  }

  mailunAgent.messages().send(data, function (error) {
    if (error) {
      throw error
    }
    cb(null, 'success')
  })
}
