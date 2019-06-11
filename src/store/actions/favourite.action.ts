import { List } from 'immutable'
import { IPhoto, IAsyncDataSuccessAction, IAsyncDataErrorAction, IAsyncDataLoadAction } from '../../core'

// Action Types

export enum FavouriteActionTypes {
  LOAD = '[FavouritePage] Load',
  SUCCESS = '[FavouritePage] Success',
  ERROR = '[FavouritePage] Error',
  ADD = '[FavouritePage] Add'
}

// Action Interface

export interface ILoadFavouriteAction extends IAsyncDataLoadAction {
  type: FavouriteActionTypes.LOAD
}

export interface ISuccessFavouriteAction extends IAsyncDataSuccessAction<List<IPhoto>> {
  type: FavouriteActionTypes.SUCCESS
}

export interface IErrorFavouriteAction extends IAsyncDataErrorAction {
  type: FavouriteActionTypes.ERROR
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
    data: List(photos),
    type: FavouriteActionTypes.SUCCESS
  }
}

export function errorFavourite(error: string): IErrorFavouriteAction {
  return {
    error,
    type: FavouriteActionTypes.ERROR
  }
}
export function addFavourite(urls: string[], startPosition: number): IAddFavouriteAction {
  const photos: IPhoto[] = urls.map((p, i) => ({ url: p, position: i + startPosition }));
  return {
    payload: {
      photos
    },
    type: FavouriteActionTypes.ADD
  }
}

export type FavouriteAction = ILoadFavouriteAction
  | ISuccessFavouriteAction | IErrorFavouriteAction | IAddFavouriteAction
