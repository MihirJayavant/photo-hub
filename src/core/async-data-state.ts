export enum AsyncDataState {
  INITIAL = 'Initial',
  LOADED = 'Loaded',
  LOADING = 'Loading',
  ERROR = 'Error'
}

export interface IAsyncData<T> {
  data: T
  dataState: AsyncDataState
  error: string
}

export function getInitialState<T>(data: T): IAsyncData<T> {
  return {
    data,
    dataState: AsyncDataState.INITIAL,
    error: ''
  }
}

export interface IAction {
  readonly type: string
}

export interface IAsyncDataLoadAction extends IAction {
  readonly type: string
}

export interface IAsyncDataSuccessAction<T> extends IAction {
  data: T
}
export interface IAsyncDataErrorAction extends IAction {
  error: string
}

export type AsyncDataAction<T> =
  | IAsyncDataLoadAction
  | IAsyncDataSuccessAction<T>
  | IAsyncDataErrorAction

type baseReducerFn<TData, TState extends IAsyncData<TData>> = (state: TState, action: any) => TState

export interface IAsyncDataActionType {
  loadActionType: string
  successActionType: string
  errorActionType: string
}

function updateObj(state: any, value: any): any {
  return { ...state, ...value }
}

export function withAsyncDataReducer<TData, TState extends IAsyncData<TData>>(
  baseReducer: baseReducerFn<TData, TState>,
  actionType: IAsyncDataActionType
) {
  return (state: TState, action: AsyncDataAction<TData>) => {
    switch (action.type) {
      case actionType.loadActionType:
        state = updateObj(state, {
          dataState: AsyncDataState.LOADING,
          error: ''
        })
        break
      case actionType.successActionType:
        state = updateObj(state, {
          data: (action as IAsyncDataSuccessAction<TData>).data,
          dataState: AsyncDataState.LOADED,
          error: ''
        })
        break
      case actionType.errorActionType:
        state = updateObj(state, {
          dataState: AsyncDataState.ERROR,
          error: (action as IAsyncDataErrorAction).error
        })
    }
    return baseReducer(state, action)
  }
}
