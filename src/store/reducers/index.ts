import { combineReducers } from 'redux'
import * as fromFav from './favourite.reducer'

export interface IState {
  favourite: fromFav.IFavouriteState
}

export const reducer = combineReducers<IState>({
  favourite: fromFav.reducer,
})
