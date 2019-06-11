import { IDBPDatabase, IDBPTransaction } from 'idb';
import { select } from 'redux-saga/effects'
import { IDbSchema } from '../../infrastructure';
import { IAddFavouriteAction } from '../actions';
import { getDb } from '../selectors'

export function* addFavEffect(action: IAddFavouriteAction) {
  const photos = action.payload.photos

  const db: IDBPDatabase<IDbSchema> = yield select(getDb)
  const tx: IDBPTransaction<IDbSchema> = yield db.transaction('favourites', 'readwrite')
  for (const photo of photos) {
    tx.db.add('favourites', photo)
  }
  yield tx.done
}
