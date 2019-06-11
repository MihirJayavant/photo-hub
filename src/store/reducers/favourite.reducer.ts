import { List } from 'immutable'
import { getInitialState, IAsyncData, IPhoto, withAsyncDataReducer } from '../../core'
import { FavouriteAction, FavouriteActionTypes } from '../actions'

const mock: IPhoto[] = []

export interface IFavouriteState extends IAsyncData<List<IPhoto>> { }

export const initialState: IFavouriteState = {
  ...getInitialState<List<IPhoto>>(List<IPhoto>(mock))
}

export function baseReducer(state = initialState, action: FavouriteAction): IFavouriteState {
  switch (action.type) {
    case FavouriteActionTypes.ADD: return {
      ...state, data: state.data.push(...action.payload.photos)
    }
  }
  return state
}

export function reducer(state = initialState, action: FavouriteAction): IFavouriteState {

  return withAsyncDataReducer<List<IPhoto>, IFavouriteState>(baseReducer, {
    errorActionType: FavouriteActionTypes.ERROR,
    loadActionType: FavouriteActionTypes.LOAD,
    successActionType: FavouriteActionTypes.SUCCESS
  })(state, action)
}
