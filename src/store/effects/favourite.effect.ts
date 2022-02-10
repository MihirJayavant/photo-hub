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
  try {
    const photos = action.photoUrls
    const db: IDBPDatabase<IDbSchema> = yield openDatabase()
    const tx = yield db.transaction('favourites', 'readwrite')
    const promises: Array<Promise<any>> = []
    for (const photo of photos) {
      promises.push(tx.store.add({ url: photo }))
    }
    yield promises
    yield tx.done
    yield db.close()
    yield put(loadFavourite())
  } catch (error) {
    console.error(error)
  }
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
  const tx = yield db.transaction('favourites', 'readwrite')
  const promises: Array<Promise<any>> = []
  for (const id of selected) {
    promises.push(tx.store.delete(id))
  }
  yield promises
  yield tx.done
  yield db.close()
}
