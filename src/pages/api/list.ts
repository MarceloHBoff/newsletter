import { NowRequest, NowResponse } from '@vercel/node'

import { Db, MongoClient } from 'mongodb'

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const urlString = new URL(uri)

  const dbName = urlString.pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<NowResponse> => {
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  const emails = await collection.find().toArray()

  return response.status(201).json({ emails })
}
