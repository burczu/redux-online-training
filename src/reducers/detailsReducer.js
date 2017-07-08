import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  event: {}
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DETAILS_SELECT_EVENT:
      const event = state.events.find(item => item.id === parseInt(action.payload.id, 10));
      return { ...state, event };
    default:
      return state;
  }
}
