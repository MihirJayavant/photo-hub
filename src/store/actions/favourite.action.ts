import { List, Map } from 'immutable'
import { IPhoto, IAsyncDataSuccessAction, IAsyncDataErrorAction, IAsyncDataLoadAction } from '../../core'

// Action Types

export enum FavouriteActionTypes {
  LOAD = '[FavouritePage] Load',
  SUCCESS = '[FavouritePage] Success',
  ERROR = '[FavouritePage] Error',
  ADD = '[FavouritePage] Add',
  DELETE = '[FavouritePage] Delete'
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
  photos: IPhoto[]
}
export interface IDeleteFavouriteAction {
  type: FavouriteActionTypes.DELETE
  selectedPhotos: Map<number, IPhoto>
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
    photos,
    type: FavouriteActionTypes.ADD
  }
}

export function deleteFavourite(selectedPhotos: Map<number, IPhoto>): IDeleteFavouriteAction {

  return {
    selectedPhotos,
    type: FavouriteActionTypes.DELETE
  }
}

export type FavouriteAction = ILoadFavouriteAction
  | ISuccessFavouriteAction | IErrorFavouriteAction | IAddFavouriteAction | IDeleteFavouriteAction
