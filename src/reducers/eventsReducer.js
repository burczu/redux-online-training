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
  switch (action.type) {
    case constants.EVENTS_CLEAR:
      return { ...state, events: [] };
    case constants.EVENTS_DELETE:
      const id = action.payload.id;
      const filteredEvents = state.events.filter(item => item.id !== id);

      return { ...state, events: filteredEvents };
    case constants.EVENTS_FILTER:
      return { ...state, filter: action.payload.filter };
    case constants.EVENTS_FORM_DATA:
      const { field, value } = action.payload;
      return { ...state, [field]: value, [field + 'Valid']: value.length > 0 };
    default:
      return state;
  }
}
