import * as constants from '../constants';

export function selectEvent(id) {
  return {
    type: constants.DETAILS_SELECT_EVENT,
    payload: {
      id
    }
  }
}
