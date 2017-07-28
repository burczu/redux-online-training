import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  event: {}
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DETAILS_FIND:
      const eventId = action.payload.eventId;
      const event = state.events.find(item => item.id === parseInt(eventId, 10));
      return { ...state, event };
    default:
      return state;
  }
}
