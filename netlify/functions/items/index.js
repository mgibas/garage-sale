const methods = require('./methods')

exports.handler = async (event, context) => {
  const method = event.httpMethod.toLowerCase() || 'get'

  return methods[method]
    ? methods[method]({ event, context })
    : { statusCode: 400, body: 'Unrecognized HTTP Method' }
}
