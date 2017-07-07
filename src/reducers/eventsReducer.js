import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
  events,
  filter: '',
  newName: '',
  newNameValid: false,
  newWhere: '',
  newWhereValid: false,
  newDate: '',
  newDateValid: false,
  newHour: '',
  newHourValid: false
};

export function eventsReducer(state = initialState, action) {
  switch(action.type) {
    case constants.EVENTS_CLEAR_LIST:
      return { ...state, events: [] };
    case constants.EVENTS_DELETE_EVENT:
      const id = action.payload.id;
      const filteredEvents = state.events.filter(item => item.id !== id);

      return { ...state, events: filteredEvents };
    case constants.EVENTS_FILTER_EVENTS:
      return { ...state, filter: action.payload.filter };
    case constants.EVENTS_NAME_CHANGED:
      return { ...state, newName: action.payload.name, newNameValid: action.payload.valid };
    case constants.EVENTS_WHERE_CHANGED:
      return { ...state, newWhere: action.payload.where, newWhereValid: action.payload.valid };
    case constants.EVENTS_DATE_CHANGED:
      return { ...state, newDate: action.payload.date, newDateValid: action.payload.valid };
    case constants.EVENTS_HOUR_CHANGED:
      return { ...state, newHour: action.payload.hour, newHourValid: action.payload.valid };
    default:
      return state;
  }
}
