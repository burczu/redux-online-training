import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getEvents() {
  return (dispatch) => {
    dispatch(getEventsStart());

    fetch('http://frontendinsights.com/events.json')
      .then(response => response.json())
      .then(data => dispatch(getEventsSuccess(data)))
      .catch(error => dispatch(getEventsError(error)));
  };
}

export function getEventsStart() {
  return {
    type: constants.EVENTS_GET_START
  };
}

export function getEventsSuccess(data) {
  return {
    type: constants.EVENTS_GET_SUCCESS,
    payload: {
      data
    }
  }
}

export function getEventsError(error) {
  return {
    type: constants.EVENTS_GET_ERROR,
    payload: {
      error
    }
  }
}

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

export function addEvent(name, place, date, time) {
  return {
    type: constants.EVENTS_ADD,
    payload: {
      name,
      place,
      date,
      time
    }
  };
}
