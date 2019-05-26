import { createSelector } from 'reselect'
import { IState } from '../reducers'

const getFavPhotoState = (state: IState) => state.favourite

export const getFavPhotos = createSelector(
  [getFavPhotoState],
  s => s.data
)
