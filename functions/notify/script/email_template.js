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
    intro: 'We have got a new inquiry',
    signature: 'Sincerely',
    table: {
      data: [
        {
          item: 'Name',
          info: '{{ name }}'
        },
        {
          item: 'Mobile phone',
          info: '{{ mobilePhone }}'
        },
        {
          item: 'Home phone',
          info: '{{ homePhone }}'
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
          item: 'Document type',
          info: '{{ documentType }}'
        },
        {
          item: 'Word count',
          info: '{{ wordCount }}'
        },
        {
          item: 'From language',
          info: '{{ fromLanguage }}'
        },
        {
          item: 'To language',
          info: '{{ toLanguage }}'
        },
        {
          item: 'Time required',
          info: '{{ timeRequired }}'
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
const mailgen = new Mailgen(option)
const html = mailgen.generate(content)
require('fs').writeFileSync('./../src/template.html', html, 'utf8')