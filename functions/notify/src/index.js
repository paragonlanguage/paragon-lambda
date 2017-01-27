import htmlRaw from './template'
import request from 'request'
import template from 'lodash/template'
import templateSettings from 'lodash/templateSettings'

export default (e, ctx, cb) => {
  const apiKey = 'key-8e87b0928f5b659f2a66c44ffbcff6e4'
  const domain = 'sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org'
  const data = {
    name: 'Tony Fu',
    mobilePhone: '0441234123',
    homePhone: '02-1234-1231',
    email: 'tonyfu@xman.com',
    companyName: 'xmen',
    companyNumber: '02-4231-4321',
    documentType: 'suicide note',
    wordCount: '3000',
    fromLanguage: 'English',
    toLanguage: 'French',
    timeRequired: '3 days'
  }

  templateSettings.interpolate = /{{([\s\S]+?)}}/g
  const compiled = template(htmlRaw)
  const html = compiled(data)

  const body = {
    form: {
      from: 'Paragon Language Service [test] <mailgun@sandbox063c6e8db72945e19ef45d2a9bf3c87d.mailgun.org>',
      to: 'tonyfu.dev@gmail.com',
      subject: 'Hi, we have got a new inquery',
      html: html
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
