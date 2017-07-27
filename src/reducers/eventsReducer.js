import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  filter: '',
};

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.EVENTS_CLEAR:
      return { ...state, events: [] };
    case constants.EVENTS_DELETE:
      const id = action.payload.id;
      const filteredEvents = state.events.filter(item => item.id !== id);

      return { ...state, events: filteredEvents };
    case constants.EVENTS_FILTER:
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
}
