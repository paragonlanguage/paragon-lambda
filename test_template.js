const Mailgen = require('mailgen')
const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Paragon Language Service',
    link: 'https://paragonlanguage.com',
    copyright: 'Copyright © 2017 Paragon Language Service. All rights reserved.',
    logo: 'https://s3-ap-southeast-2.amazonaws.com/paragon-asset/logo/logo_black.png'
  }
})

const email = {
  body: {
    greeting: 'Hi',
    intro: 'We had a new inquiry come in',
    signature: 'Sincerely',
    table: {
      data: [
        {
          item: 'Name',
          info: 'Tony Fu'
        },
        {
          item: 'Mobile phone',
          info: '0441234123'
        },
        {
          item: 'Home phone',
          info: '02-1234-1234'
        },
        {
          item: 'Company name',
          info: 'X-men'
        },
        {
          item: 'Company number',
          info: '02-4321-4321'
        },
        {
          item: 'Document type',
          info: 'Suicide note'
        },
        {
          item: 'Word count',
          info: '4000'
        },
        {
          item: 'From language',
          info: 'English'
        },
        {
          item: 'To language',
          info: 'French'
        },
        {
          item: 'Time required',
          info: '3 days'
        }
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

const emailBody = mailGenerator.generate(email)
require('fs').writeFileSync('preview.html', emailBody, 'utf8')
