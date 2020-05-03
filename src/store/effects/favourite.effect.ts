import { IDBPDatabase, IDBPTransaction } from 'idb'
import { select, put } from 'redux-saga/effects'
import { IPhoto } from '../../core'
import { IDbSchema, openDatabase } from '../../infrastructure'
import { IAddFavouriteAction, successFavourite, loadFavourite } from '../actions'
import { getFavPhotos } from '../selectors'
import { List } from 'immutable'

export function* addFavEffect(action: IAddFavouriteAction) {
  const photos = action.photoUrls

  const db: IDBPDatabase<IDbSchema> = yield openDatabase()
  const tx: IDBPTransaction<IDbSchema> = yield db.transaction('favourites', 'readwrite')

  yield photos.forEach(photo => {
    tx.db.add('favourites', { url: photo })
  })

  yield tx.done
  yield db.close()
  yield put(loadFavourite())
}
export function* loadFavEffect() {
  const db: IDBPDatabase<IDbSchema> = yield openDatabase()
  const photos: IPhoto[] = yield db.getAll('favourites')
  yield db.close()
  yield put(successFavourite(photos))
}

export function* deleteFavEffect() {
  const photos: List<IPhoto> = yield select(getFavPhotos)
  const db: IDBPDatabase<IDbSchema> = yield openDatabase()
  const tx: IDBPTransaction<IDbSchema> = yield db.transaction('favourites', 'readwrite')
  yield tx.db.clear('favourites')
  yield photos.forEach(photo => {
    tx.db.add('favourites', photo)
  })
  yield tx.done
  yield db.close()
}
