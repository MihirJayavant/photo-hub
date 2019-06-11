import { createSelector } from 'reselect'
import { IState } from '../reducers'

const getDatabaseState = (state: IState) => state.database

export const getDb = createSelector(
  [getDatabaseState],
  s => s.db
)
