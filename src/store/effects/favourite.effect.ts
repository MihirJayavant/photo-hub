import { IDBPDatabase, IDBPTransaction } from 'idb';
import { select, put } from 'redux-saga/effects'
import { IPhoto } from '../../core';
import { IDbSchema } from '../../infrastructure';
import { IAddFavouriteAction, successFavourite } from '../actions';
import { getDb } from '../selectors'

export function* addFavEffect(action: IAddFavouriteAction) {
  const photos = action.photos

  const db: IDBPDatabase<IDbSchema> = yield select(getDb)
  const tx: IDBPTransaction<IDbSchema> = yield db.transaction('favourites', 'readwrite')
  for (const photo of photos) {
    tx.db.add('favourites', photo)
  }
  yield tx.done
}
export function* loadFavEffect() {

  const db: IDBPDatabase<IDbSchema> = yield select(getDb)
  const photos: IPhoto[] = yield db.getAll('favourites')
  yield put(successFavourite(photos))
}
