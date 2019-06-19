import { IDBPDatabase, IDBPTransaction } from 'idb';
import { select, put } from 'redux-saga/effects'
import { IPhoto } from '../../core';
import { IDbSchema } from '../../infrastructure';
import { IAddFavouriteAction, successFavourite } from '../actions';
import { getDb, getFavPhotos } from '../selectors'
import { List } from 'immutable';

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

export function* deleteFavEffect() {

  const photos: List<IPhoto> = yield select(getFavPhotos)
  const db: IDBPDatabase<IDbSchema> = yield select(getDb)
  const tx: IDBPTransaction<IDbSchema> = yield db.transaction('favourites', 'readwrite')
  yield tx.db.clear('favourites')
  yield photos.forEach(photo =>  {
    tx.db.add('favourites', photo)
  })
  yield tx.done

}
