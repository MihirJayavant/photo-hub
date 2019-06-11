import { takeEvery } from 'redux-saga/effects'

import { FavouriteActionTypes, DatabseActionTypes } from '../actions'
import { loadDatabaseEffect } from './database.effect';
import { addFavEffect, loadFavEffect } from './favourite.effect'

export function* sagas() {
  yield takeEvery(FavouriteActionTypes.ADD, addFavEffect)
  yield takeEvery(FavouriteActionTypes.LOAD, loadFavEffect)
  yield takeEvery(DatabseActionTypes.LOAD, loadDatabaseEffect)
}
