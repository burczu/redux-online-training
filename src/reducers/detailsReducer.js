import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  event: {}
};

export function detailsReducer(state = initialState, action) {
  return state;
}
