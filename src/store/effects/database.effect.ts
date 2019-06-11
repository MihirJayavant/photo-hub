import { IDBPDatabase, openDB } from 'idb';
import { put } from 'redux-saga/effects'
import { IDbSchema } from '../../infrastructure';
import { loadedDatabase } from '../actions';

export function* loadDatabaseEffect() {
  const db: IDBPDatabase<IDbSchema> = yield openDB<IDbSchema>('photo-hub', 1, {
    upgrade(currentDb: IDBPDatabase<IDbSchema>) {
      currentDb.createObjectStore('favourites', { keyPath: 'position' })
    }
  })

  yield put(loadedDatabase(db))
}
