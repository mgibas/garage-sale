exports.get = async ({ event, context }) => {
  return { statusCode: 400, body: JSON.stringify({ foo: 'bar' }) }
}
