import { DBSchema } from 'idb'

export interface IDbSchema extends DBSchema {
  favourites: {
    value: {
      url: string
      id?: number
    }
    key: number
  }
}

export type StoreCollection = ['favourites']
