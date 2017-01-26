import htmlEmail from './template.html'
import request from 'request'

export default (e, ctx, cb) => {
  const auth = {
    auth: {
      api_key: 'key-8e87b0928f5b659f2a66c44ffbcff6e4',
      domain: 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'
    }
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail({
    from: 'Excited User <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
    to: 'paragonlanguage@mailinator.com',
    subject: 'Hey you, awesome!',
    html: htmlEmail
  }, function (err, info) {
    if (err) {
      throw err
    }
    cb(null, 'success')
  })
}
