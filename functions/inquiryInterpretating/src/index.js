import notificationRaw from './notification'
import confirmationRaw from './confirmation'
import request from 'request'
import template from 'lodash/template'
import templateSettings from 'lodash/templateSettings'

export default (e, ctx, cb) => {
  const payload = e
  const apiKey = process.env.mailgunApi
  const domain = process.env.mailgunDomain

  const notSupplied = 'Not supplied'
  const defaultValues = {
    firstName: notSupplied,
    lastName: notSupplied,
    mobilePhone: notSupplied,
    email: notSupplied,
    companyName: notSupplied,
    companyNumber: notSupplied,
    fromDate: notSupplied,
    toDate: notSupplied,
    fromLanguage: notSupplied,
    toLanguage: notSupplied,
    duriation: notSupplied,
    type: notSupplied
  }

  const data = Object.assign(defaultValues, payload)
  templateSettings.interpolate = /{{([\s\S]+?)}}/g
  const compileNotification = template(notificationRaw)
  const notificationHtml = compileNotification(data)

  const compileConfirmation = template(confirmationRaw)
  const confirmationHtml = compileConfirmation(data)

  const notificationBody = {
    form: {
      from: `Paragon Language Service <noreply@${domain}>`,
      to: 'paragonlanguage@mailinator.com',
      cc: 'tonyfu.dev@gmail.com',
      subject: `Hi, we received a new inquery for interpreting from ${data.firstName} ${data.lastName}`,
      html: notificationHtml
    },
    auth: {
      user: 'api',
      pass: apiKey
    }
  }

  const confirmationBody = {
    form: {
      from: `Paragon Language Service <noreply@${domain}>`,
      to: `${data.firstName} <${data.email}>`,
      cc: 'paragonlanguage@mailinator.com,tonyfu.dev@gmail.com',
      subject: 'Thank you for choosing Paragon',
      html: confirmationHtml
    },
    auth: {
      user: 'api',
      pass: apiKey
    }
  }

  const url = urlBuilder(domain)
  Promise.all(
    [
      send(url, notificationBody),
      send(url, confirmationBody)
    ]
  )
  .then(responses => {
    cb(null, 'success')
  })
  .catch(err => {
    cb(err)
  })
}

function urlBuilder (domain) {
  return `https://api.mailgun.net/v3/${domain}/messages`
}

function send (url, body) {
  return new Promise((resolve, reject) => {
    request
      .post(url, body, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
  })
}