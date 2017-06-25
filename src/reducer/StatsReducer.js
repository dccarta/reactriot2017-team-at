import { LOAD_STATS_FILE_TEXT } from '../constant/ActionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case LOAD_STATS_FILE_TEXT: return action.payload
    default: return state
  }
}
