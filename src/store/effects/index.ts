import { takeEvery } from 'redux-saga/effects'

import { DatabseActionTypes, FavouriteActionTypes } from '../actions'
import { loadDatabaseEffect } from './database.effect';
import { addFavEffect, deleteFavEffect, loadFavEffect } from './favourite.effect'

export function* sagas() {
  yield takeEvery(DatabseActionTypes.LOAD, loadDatabaseEffect)
  yield takeEvery(FavouriteActionTypes.ADD, addFavEffect)
  yield takeEvery(FavouriteActionTypes.LOAD, loadFavEffect)
  yield takeEvery(FavouriteActionTypes.DELETE, deleteFavEffect)
}
