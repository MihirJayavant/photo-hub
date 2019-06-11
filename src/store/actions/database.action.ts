import { IDBPDatabase } from 'idb'
import { IDbSchema } from '../../infrastructure'

// Action Types

export enum DatabseActionTypes {
  LOAD = '[Database] Load',
  LOADED = '[Database] Loaded'
}

// Action Interface

export interface ILoadDatabaseAction {
  type: DatabseActionTypes.LOAD
}

export interface ILoadedDatabaseAction {
  type: DatabseActionTypes.LOADED,
  db: IDBPDatabase<IDbSchema>
}

// Action Creators

export function loadDatabase(): ILoadDatabaseAction {
  return {
    type: DatabseActionTypes.LOAD
  }
}
export function loadedDatabase(db: IDBPDatabase<IDbSchema>): ILoadedDatabaseAction {
  return {
    db,
    type: DatabseActionTypes.LOADED,
  }
}

export type DatabaseAction = ILoadDatabaseAction | ILoadedDatabaseAction
