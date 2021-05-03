const methods = require('./methods')

exports.handler = async (event, context) => {
  const path = event.path.replace(/\/api\/items[\/]+/, '')
  const method = event.httpMethod.toLowerCase() || 'get'

  return methods[method]
    ? methods[method]({ event, context, path })
    : { statusCode: 400, body: 'Unrecognized HTTP Method' }
}
