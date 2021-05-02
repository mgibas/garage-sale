const faunadb = require('faunadb')
const q = faunadb.query

exports.get = async ({ event, context }) => {
  const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
  return client.query(q.Paginate(q.Documents(q.Collection('items'))))
    .then(({ data }) => client.query(data.map(ref => q.Get(ref))))
    .then((data) => ({ 
      statusCode: 200,
      body: JSON.stringify(data)
    }))
}
