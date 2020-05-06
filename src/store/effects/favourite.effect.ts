import { IDBPDatabase, IDBPTransaction } from 'idb'
import { put } from 'redux-saga/effects'
import { IPhoto } from '../../core'
import { IDbSchema, openDatabase, StoreCollection } from '../../infrastructure'
import {
  IAddFavouriteAction,
  successFavourite,
  loadFavourite,
  IDeleteFavouriteAction,
} from '../actions'

export function* addFavEffect(action: IAddFavouriteAction) {
  const photos = action.photoUrls
  const db: IDBPDatabase<IDbSchema> = yield openDatabase()
  const tx: IDBPTransaction<IDbSchema, StoreCollection> = yield db.transaction(
    'favourites',
    'readwrite'
  )

  for (const photo of photos) {
    yield tx.store.add({ url: photo })
  }

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

export function* deleteFavEffect(action: IDeleteFavouriteAction) {
  const selected: number[] = yield action.selectedPhotos.toArray()
  const db: IDBPDatabase<IDbSchema> = yield openDatabase()
  const tx: IDBPTransaction<IDbSchema, StoreCollection> = yield db.transaction(
    'favourites',
    'readwrite'
  )

  for (const id of selected) {
    yield tx.store.delete(id)
  }

  yield tx.done
  yield db.close()
}
