import { List } from 'immutable'
import { getInitialState, IAsyncData, IPhoto, withAsyncDataReducer } from '../../core'
import { FavouriteAction, FavouriteActionTypes } from '../actions'

const mock: IPhoto[] = [
  {
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' +
      '?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' +
      '?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' +
      '?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' +
      '?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg'
  },
  {
    url: 'https://en.es-static.us/upl/2017/06/ocean-sunset-Paulo-P_Pereira-Portugal.jpg'
  },
  {
    url: 'file:///C://Users//rh0226/Downloads//BingWallpaper-2019-05-24.jpg'
  }
]

export interface IFavouriteState extends IAsyncData<List<IPhoto>> { }

export const initialState: IFavouriteState = {
  ...getInitialState<List<IPhoto>>(List<IPhoto>(mock))
}

export function baseReducer(state = initialState, action: FavouriteAction): IFavouriteState {
  return state
}

export function reducer(state = initialState, action: FavouriteAction): IFavouriteState {
  return withAsyncDataReducer<List<IPhoto>, IFavouriteState>(baseReducer, {
    errorActionType: FavouriteActionTypes.ERROR,
    loadActionType: FavouriteActionTypes.LOAD,
    successActionType: FavouriteActionTypes.SUCCESS
  })(state, action)
}
