import htmlEmail from './template'
import request from 'request'

export default (e, ctx, cb) => {
  const apiKey = 'key-8e87b0928f5b659f2a66c44ffbcff6e4'
  const domain = 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'

  const body = {
    form: {
      from: 'Paragon Language Service [test] <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
      to: 'tonyfu.dev@gmail.com',
      subject: 'Hi, we have got a new inquery',
      html: htmlEmail
    },
    auth: {
      user: 'api',
      pass: apiKey
    }
  }

  request
    .post(`https://api.mailgun.net/v3/${domain}/messages`, body, (err, response) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, response)
      }
    })
}
