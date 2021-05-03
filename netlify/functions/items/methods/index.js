const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

exports.get = async ({ event, context }) => {
  return client.query(q.Paginate(q.Match(q.Ref('indexes/items-all'))))
    .then(({ data }) => client.query(data.map(([name, ref]) => q.Get(ref))))
    .then((data) => ({ 
      statusCode: 200,
      body: JSON.stringify(data.map((d) => ({
        ref: d.ref,
        ...d.data
      })))
    }))
}

exports.post = async ({ event, context }) => {
  const data = JSON.parse(event.body)
  const item = { data }
  return client
    .query(q.Create(q.Ref('classes/items'), { data }))
    .then((resp) => ({
        statusCode: 200,
        body: JSON.stringify(resp)
    }))
}

exports.delete = async ({ event, context, path }) => {
  const [ id ] = path.split('/') 
  return client
    .query(q.Delete(q.Ref(`classes/items/${id}`)))
    .then((resp) => ({
        statusCode: 200,
        body: JSON.stringify(resp)
    }))
}
