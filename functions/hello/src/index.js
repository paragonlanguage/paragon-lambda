export default (e, ctx, cb) => {
  console.log(e)
  console.log(ctx)
  cb(null, 'Hello ' + e['body-json']['name'])
}
