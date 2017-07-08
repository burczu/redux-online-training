import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getDetails() {
  return (dispatch) => {
    dispatch(getDetailsRequested());

    fetch('http://frontendinsights.com/events.json')
      .then(response => response.json())
      .then(data => dispatch(getDetailsSuccess(data)))
      .catch(error => dispatch(getDetailsError(error)));
  };
}

export function getDetailsRequested() {
  return {
    type: constants.DETAILS_GET_DETAILS
  };
}

export function getDetailsSuccess(data) {
  return {
    type: constants.DETAILS_GET_DETAILS_SUCCESS,
    payload: {
      data
    }
  }
}

export function getDetailsError(error) {
  return {
    type: constants.DETAILS_GET_DETAILS_ERROR,
    payload: {
      error
    }
  }
}

export function selectEvent(id) {
  return {
    type: constants.DETAILS_SELECT_EVENT,
    payload: {
      id
    }
  }
}
