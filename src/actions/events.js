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
  };
}

export function nameChanged(name, valid) {
  return {
    type: constants.EVENTS_NAME_CHANGED,
    payload: {
      name,
      valid
    }
  };
}

export function whereChanged(where, valid) {
  return {
    type: constants.EVENTS_WHERE_CHANGED,
    payload: {
      where,
      valid
    }
  };
}

export function dateChanged(date, valid) {
  return {
    type: constants.EVENTS_DATE_CHANGED,
    payload: {
      date,
      valid
    }
  };
}

export function hourChanged(hour, valid) {
  return {
    type: constants.EVENTS_HOUR_CHANGED,
    payload: {
      hour,
      valid
    }
  };
}
