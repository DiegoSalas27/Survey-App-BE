import { Collection, MongoClient } from 'mongodb'

export const transactionOptions = {
  readPreference: 'primary',
  readConcern: { level: 'local' },
  writeConcern: { w: 'majority' }
}

export const MongoHelper = {
  client: null as MongoClient,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection<T>(name: string): Collection<T> {
    return this.client.db().collection(name)
  },

  map: (document: any): any => {
    const { _id, ...documentWithoutId } = document
    return Object.assign({}, documentWithoutId, { id: _id })
  },

  mapArray: (documents: any[]): any[] => {
    return documents.map(doc => MongoHelper.map(doc))
  }
}
