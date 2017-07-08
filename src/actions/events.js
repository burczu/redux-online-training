import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getEvents() {
  return (dispatch) => {
    dispatch(getEventsRequested());

    fetch('http://frontendinsights.com/events.json')
      .then(response => response.json())
      .then(data => dispatch(getEventsSuccess(data)))
      .catch(error => dispatch(getEventsError(error)));
  };
}

export function getEventsRequested() {
  return {
    type: constants.EVENTS_GET_EVENTS
  };
}

export function getEventsSuccess(data) {
  return {
    type: constants.EVENTS_GET_EVENTS_SUCCESS,
    payload: {
      data
    }
  }
}

export function getEventsError(error) {
  return {
    type: constants.EVENTS_GET_EVENTS_ERROR,
    payload: {
      error
    }
  }
}

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

export function addEvent(name, where, date, hour) {
  return {
    type: constants.EVENTS_ADD_EVENT,
    payload: {
      name,
      where,
      date,
      hour
    }
  };
}
