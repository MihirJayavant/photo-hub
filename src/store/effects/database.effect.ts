import { IDBPDatabase, openDB } from 'idb';
import { put } from 'redux-saga/effects'
import { IDbSchema } from '../../infrastructure';
import { loadedDatabase, loadFavourite } from '../actions';

export function* loadDatabaseEffect() {
  console.log('db loaded')
  const db: IDBPDatabase<IDbSchema> = yield openDB<IDbSchema>('photo-hub', 1, {
    upgrade(currentDb: IDBPDatabase<IDbSchema>) {
      currentDb.createObjectStore('favourites', { keyPath: 'position' })
    }
  })

  yield put(loadedDatabase(db))
  yield put(loadFavourite())
}
