import * as constants from '../constants';

export function findEvent(eventId) {
  return {
    type: constants.DETAILS_FIND,
    payload: {
      eventId
    }
  }
}
