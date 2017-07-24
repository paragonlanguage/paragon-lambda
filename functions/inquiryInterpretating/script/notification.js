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
    greeting: 'Hi',
    intro: 'We received a new inquiry',
    signature: 'Sincerely',
    table: {
      data: [
        {
          item: 'First Name',
          info: '{{ firstName }}'
        },
        {
          item: 'Last Name',
          info: '{{ lastName }}'
        },
        {
          item: 'Mobile phone',
          info: '{{ mobilePhone }}'
        },
        {
          item: 'Email address',
          info: '{{ email }}'
        },
        {
          item: 'Company name',
          info: '{{ companyName }}'
        },
        {
          item: 'Company number',
          info: '{{ companyNumber }}'
        },
        {
          item: 'From the date',
          info: '{{ fromDate }}'
        },
        {
          item: 'To the date',
          info: '{{ toDate }}'
        },
        {
          item: 'Duration',
          info: '{{ duration }}'
        },
        {
          item: 'Type',
          info: '{{ type }}'
        },
        {
          item: 'From language',
          info: '{{ fromLanguage }}'
        },
        {
          item: 'To language',
          info: '{{ toLanguage }}'
        },
      ],
      columns: {
        customWidth: {
          item: '50%',
          info: '50%'
        },
        customAlignment: {
          item: 'left',
          info: 'left'
        }
      }
    }
  }
}
const mailgen = new Mailgen(option)
const html = mailgen.generate(content)

require('fs').writeFileSync('./../src/notification.js', 'export default `', 'utf8')
require('fs').appendFileSync('./../src/notification.js', html, 'utf8')
require('fs').appendFileSync('./../src/notification.js', '`', 'utf8')

