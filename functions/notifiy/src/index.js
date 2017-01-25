import mailgun from 'mailgun-js'
import mailgen from 'mailgen'

export default (e, ctx, cb) => {
  const apiKey = 'key-8e87b0928f5b659f2a66c44ffbcff6e4'
  const domain = 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'

  const agent = mailgun({apiKey, domain})



  const data = {
    from: 'Excited User <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
    to: 'paragonlanguage@mailinator.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  }

  agent.messages().send(data, function (error) {
    if (error) {
      throw error
    }
    cb(null, 'success')
  })
}

const email = {
  body: {
    greeting: 'Dear',
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
          item: '20%',
          info: '15%'
        },
        customAlignment: {
          item: 'left',
          info: 'left'
        }
      }
    }
  }
}
