import { openDB, IDBPDatabase } from 'idb'
import { IDbSchema } from './db_schema'



export function openDatabase() {
  return openDB<IDbSchema>('photo-hub', 1, {
    upgrade(currentDb: IDBPDatabase<IDbSchema>) {
      currentDb.createObjectStore('favourites', { keyPath: 'position' })
    }
  })
}
