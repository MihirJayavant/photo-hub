import { combineReducers } from 'redux'
import * as fromDb from './database.reducer'
import * as fromFav from './favourite.reducer'

export interface IState {
  favourite: fromFav.IFavouriteState,
  database: fromDb.IDatabaseState
}

export const reducer = combineReducers<IState>({
  database: fromDb.reducer,
  favourite: fromFav.reducer,
})
