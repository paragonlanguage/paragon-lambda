const mailgun = require('mailgun-js')

const apiKey = 'key-8e87b0928f5b659f2a66c44ffbcff6e4'
const domain = 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'

const agent = mailgun({apiKey, domain})

var data = {
  from: 'Excited User <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
  to: 'tonyfu.dev@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
}

agent.messages().send(data, function (error) {
  if (error) {
    throw error
  }
  console.log('success')
})
