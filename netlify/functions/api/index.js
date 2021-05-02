const methods = require('./methods')

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
  const segments = path.split('/').filter(e => e)
  const method = event.httpMethod?.toLowerCase() || 'get'

  console.log(event)
  console.log(path)

  return methods[method]
    ? methods[method]({ path, event, context })
    : { statusCode: 400, body: 'Unrecognized HTTP Method' }
}
