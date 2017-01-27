const Mailgen = require('mailgen')
const option = {
  theme: 'default',
  product: {
    name: 'Paragon Language Service',
    link: 'https://paragonlanguage.com',
    copyright: 'Copyright © 2017 Paragon Language Service. All rights reserved.',
    logo: 'https://s3-ap-southeast-2.amazonaws.com/paragon-asset/logo/logo_black.png'
  }
}
const content = {
  body: {
    greeting: 'Hi {{ firstName }}',
    intro: ['Your inquery has been lodged.', 'One of our staff will contact you shortly.'],
    outro: ['Need help, or have questions?', 'Please give us a call on 0123 2345'],
    signature: 'Sincerely'
  }
}
const mailgen = new Mailgen(option)
const html = mailgen.generate(content)
require('fs').writeFileSync('./../src/confirmation.js', 'export default `', 'utf8')
require('fs').appendFileSync('./../src/confirmation.js', html, 'utf8')
require('fs').appendFileSync('./../src/confirmation.js', '`', 'utf8')
