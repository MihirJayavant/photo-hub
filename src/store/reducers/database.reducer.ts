import { IDBPDatabase } from 'idb'
import { IDbSchema } from '../../infrastructure'
import { DatabaseAction, DatabseActionTypes } from '../actions'

export interface IDatabaseState {
  db: IDBPDatabase<IDbSchema> | null
}

export const initialState: IDatabaseState = {
  db: null
}

export function reducer(state = initialState, action: DatabaseAction): IDatabaseState {

  switch (action.type) {
    case DatabseActionTypes.LOADED: return {
      ...state, db: action.db
    }
  }
  return state
}
