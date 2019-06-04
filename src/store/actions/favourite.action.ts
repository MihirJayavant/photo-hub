import { List } from 'immutable'
import { IPhoto } from '../../core'

// Action Types

export enum FavouriteActionTypes {
  LOAD = '[FavouritePage] Load',
  SUCCESS = '[FavouritePage] Success',
  ERROR = '[FavouritePage] Error',
  ADD = '[FavouritePage] Add'
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
export interface IAddFavouriteAction {
  type: FavouriteActionTypes.ADD
  payload: { photos: IPhoto[] }
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
export function addFavourite(urls: string[]): IAddFavouriteAction {
  const photos: IPhoto[] = urls.map(p => ({ url: p }));
  return {
    payload: {
      photos
    },
    type: FavouriteActionTypes.ADD
  }
}

export type FavouriteAction = ILoadFavouriteAction
  | ISuccessFavouriteAction | IErrorFavouriteAction | IAddFavouriteAction
