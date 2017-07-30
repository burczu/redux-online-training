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
    type: constants.DETAILS_GET_START
  };
}

export function getEventsSuccess(data) {
  return {
    type: constants.DETAILS_GET_SUCCESS,
    payload: {
      data
    }
  }
}

export function getEventsError(error) {
  return {
    type: constants.DETAILS_GET_ERROR,
    payload: {
      error
    }
  }
}

export function findEvent(eventId) {
  return {
    type: constants.DETAILS_FIND,
    payload: {
      eventId
    }
  }
}
