import { LOAD_STATS_FILE_TEXT } from '../constant/ActionTypes'

export const loadStatsFileText = (text) => ({
  type: LOAD_STATS_FILE_TEXT,
  payload: text
})
