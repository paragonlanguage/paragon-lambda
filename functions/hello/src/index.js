export default (e, ctx, cb) => {
  console.log('processing event: %j', e)
  console.log('processing context: %j', ctx)
  const id = uuid.v4()
  cb(null, 'Hello ' + e.name)
}
