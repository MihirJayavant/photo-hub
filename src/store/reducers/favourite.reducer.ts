import { List, Set } from 'immutable'
import { deletePhotos, getInitialState, IAsyncData, IPhoto, withAsyncDataReducer, selectPhoto } from '../../core'
import { FavouriteAction, FavouriteActionTypes } from '../actions'

export interface IFavouriteState extends IAsyncData<List<IPhoto>> {
  selectedPhotos: Set<number>
}

export const initialState: IFavouriteState = {
  ...getInitialState(List<IPhoto>()),
  selectedPhotos: Set<number>()
}

export function baseReducer(state = initialState, action: FavouriteAction): IFavouriteState {
  switch (action.type) {
    case FavouriteActionTypes.DELETE:
      return {
        ...state,
        selectedPhotos: Set<number>(),
        data: deletePhotos(state.data, action.selectedPhotos),
      }
    case FavouriteActionTypes.SELECT:
      return {
        ...state,
        selectedPhotos: selectPhoto(state.selectedPhotos, action.photoId),
      }
    case FavouriteActionTypes.RESET_SELECTED:
      return {
        ...state,
        selectedPhotos: Set<number>(),
      }
  }
  return state
}

export function reducer(state = initialState, action: FavouriteAction): IFavouriteState {
  return withAsyncDataReducer<List<IPhoto>, IFavouriteState>(baseReducer, {
    errorActionType: FavouriteActionTypes.ERROR,
    loadActionType: FavouriteActionTypes.LOAD,
    successActionType: FavouriteActionTypes.SUCCESS,
  })(state, action)
}
