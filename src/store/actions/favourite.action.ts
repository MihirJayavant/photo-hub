import { List, Set } from 'immutable'
import {
  IPhoto,
  IAsyncDataSuccessAction,
  IAsyncDataErrorAction,
  IAsyncDataLoadAction,
} from '../../core'

// Action Types

export enum FavouriteActionTypes {
  LOAD = '[FavouritePage] Load',
  SUCCESS = '[FavouritePage] Success',
  ERROR = '[FavouritePage] Error',
  ADD = '[FavouritePage] Add',
  DELETE = '[FavouritePage] Delete',
  SELECT = '[FavouritePage] Select',
  RESET_SELECTED = '[FavouritePage] Reset Selected'
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
  photoUrls: string[]
}
export interface IDeleteFavouriteAction {
  type: FavouriteActionTypes.DELETE
  selectedPhotos: Set<number>
}

export interface ISelectFavouriteAction {
  type: FavouriteActionTypes.SELECT
  photoId: number
}

export interface IResetSelectedFavouriteAction {
  type: FavouriteActionTypes.RESET_SELECTED
}

// Action Creators

export function loadFavourite(): ILoadFavouriteAction {
  return {
    type: FavouriteActionTypes.LOAD,
  }
}

export function successFavourite(photos: IPhoto[]): ISuccessFavouriteAction {
  return {
    data: List(photos),
    type: FavouriteActionTypes.SUCCESS,
  }
}

export function errorFavourite(error: string): IErrorFavouriteAction {
  return {
    error,
    type: FavouriteActionTypes.ERROR,
  }
}
export function addFavourite(photoUrls: string[]): IAddFavouriteAction {
  return {
    photoUrls,
    type: FavouriteActionTypes.ADD,
  }
}

export function deleteFavourite(selectedPhotos: Set<number>): IDeleteFavouriteAction {
  return {
    selectedPhotos,
    type: FavouriteActionTypes.DELETE,
  }
}

export function selectFavourite(photoId: number): ISelectFavouriteAction {
  return {
    photoId,
    type: FavouriteActionTypes.SELECT,
  }
}

export function resetSelectedFavourite(): IResetSelectedFavouriteAction {
  return {
    type: FavouriteActionTypes.RESET_SELECTED,
  }
}

export type FavouriteAction =
  | ILoadFavouriteAction
  | ISuccessFavouriteAction
  | IErrorFavouriteAction
  | IAddFavouriteAction
  | IDeleteFavouriteAction
  | ISelectFavouriteAction
  | IResetSelectedFavouriteAction
