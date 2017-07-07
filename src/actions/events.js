import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR_LIST
  };
}

export function deleteEvent(id) {
  return {
    type: constants.EVENTS_DELETE_EVENT,
    payload: {
      id
    }
  };
}

export function filterEvents(filter) {
  return {
    type: constants.EVENTS_FILTER_EVENTS,
    payload: {
      filter
    }
  }
}
