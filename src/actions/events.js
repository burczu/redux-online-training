import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR
  };
}

export function deleteEvent(id) {
  return {
    type: constants.EVENTS_DELETE,
    payload: {
      id
    }
  };
}

export function filterEvents(filter) {
  return {
    type: constants.EVENTS_FILTER,
    payload: {
      filter
    }
  };
}

export function changeFormField(field, value) {
  return {
    type: constants.EVENTS_FORM_DATA,
    payload: {
      field,
      value
    }
  }
}
