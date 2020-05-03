import { takeEvery } from 'redux-saga/effects'

import { FavouriteActionTypes } from '../actions'
import { addFavEffect, deleteFavEffect, loadFavEffect } from './favourite.effect'

export function* sagas() {
  yield takeEvery(FavouriteActionTypes.ADD, addFavEffect)
  yield takeEvery(FavouriteActionTypes.LOAD, loadFavEffect)
  yield takeEvery(FavouriteActionTypes.DELETE, deleteFavEffect)
}
