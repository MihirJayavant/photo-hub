import { List } from 'immutable'
import { IPhoto } from '../../core'

// Action Types

export enum FavouriteActionTypes {
  LOAD = '[FavouritePage] Load',
  SUCCESS = '[FavouritePage] Success',
  ERROR = '[FavouritePage] Error'
}

// Action Interface

export interface ILoadFavouriteAction {
  type: FavouriteActionTypes.LOAD
}

export interface ISuccessFavouriteAction {
  type: FavouriteActionTypes.SUCCESS
  payload: { Favourite: List<IPhoto> }
}

export interface IErrorFavouriteAction {
  type: FavouriteActionTypes.ERROR
  payload: { error: string }
}

// Action Creators

export function loadFavourite(): ILoadFavouriteAction {
  return {
    type: FavouriteActionTypes.LOAD
  }
}

export function successFavourite(photos: IPhoto[]): ISuccessFavouriteAction {
  return {
    payload: {
      Favourite: List(photos)
    },
    type: FavouriteActionTypes.SUCCESS
  }
}

export function errorFavourite(error: string): IErrorFavouriteAction {
  return {
    payload: {
      error
    },
    type: FavouriteActionTypes.ERROR
  }
}

export type FavouriteAction = ILoadFavouriteAction | ISuccessFavouriteAction | IErrorFavouriteAction
