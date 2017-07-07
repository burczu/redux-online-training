import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events
};

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.EVENTS_CLEAR_LIST:
      return { ...state, events: [] };
    default:
      return state;
  }
}
