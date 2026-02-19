const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


export default async function connection(collection) {   
  const DB=process.env.NEXT_DB;
  console.log(DB,collection);
  
  await client.connect();
  return client.db(DB).collection(collection);
}