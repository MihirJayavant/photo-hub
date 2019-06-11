import { DBSchema } from 'idb';

export interface IDbSchema extends DBSchema {
  favourites: {
    value: {
      position: number,
      url: string
    }
    key: number
  }
}
