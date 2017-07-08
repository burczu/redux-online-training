import * as constants from '../constants';

const initialState = {
  events: [],
  isLoading: false,
  isError: false,
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
    case constants.EVENTS_GET_EVENTS:
      return { ...state, isLoading: true };
    case constants.EVENTS_GET_EVENTS_SUCCESS:
      return { ...state, isLoading: false, events: action.payload.data };
    case constants.EVENTS_GET_EVENTS_ERROR:
      return { ...state, isLoading: false, isError: true };
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
    case constants.EVENTS_ADD_EVENT:
      const currentEvents = state.events;
      const maxId = Math.max(...currentEvents.map(item => item.id));

      currentEvents.push({
        id: maxId + 1,
        name: action.payload.name,
        place: action.payload.where,
        date: action.payload.date,
        time: action.payload.hour
      });

      return {
        ...state,
        events: currentEvents,
        newName: '',
        newNameValid: false,
        newWhere: '',
        newWhereValid: false,
        newDate: '',
        newDateValid: false,
        newHour: '',
        newHourValid: false
      };
    default:
      return state;
  }
}
