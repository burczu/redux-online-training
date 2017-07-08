import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  dataLoaded: false,
  isLoading: false,
  isError: false,
  event: {}
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DETAILS_GET_DETAILS:
      return { ...state, isLoading: true, dataLoaded: false };
    case constants.DETAILS_GET_DETAILS_SUCCESS:
      return { ...state, isLoading: false, event: action.payload.data, dataLoaded: true };
    case constants.DETAILS_GET_DETAILS_ERROR:
      return { ...state, isLoading: false, isError: true };
    case constants.DETAILS_SELECT_EVENT:
      const event = state.events.find(item => item.id === parseInt(action.payload.id, 10));
      return { ...state, event, dataLoaded: false };
    default:
      return state;
  }
}
