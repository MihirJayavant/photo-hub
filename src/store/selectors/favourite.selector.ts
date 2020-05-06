import { createSelector } from 'reselect'
import { IState } from '../reducers'

const getFavouritePhotoState = (state: IState) => state.favourite

export const getFavouritePhotos = createSelector(
  [getFavouritePhotoState],
  s => s.data
)

export const getFavouriteSelectedPhotos = createSelector(
  [getFavouritePhotoState],
  s => s.selectedPhotos
)

export const getFavouriteIsAnyPhotoSelected = createSelector(
  [getFavouriteSelectedPhotos],
  s => s.count() > 0
)
