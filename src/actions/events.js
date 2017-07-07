import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR_LIST
  };
}
