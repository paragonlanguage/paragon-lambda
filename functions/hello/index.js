console.log('starting function')
exports.handle = function (e, ctx, cb) {
  console.log('processing event: %j', e)
  console.log('processing context: %j', ctx)
  cb(null, 'Hello ' + e.name)
}
