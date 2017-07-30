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
    case constants.EVENTS_ADD:
      const stateCopy = { ...state };
      const maxId = Math.max(...stateCopy.events.map(item => item.id));
      const { name, place, date, time } = action.payload;

      stateCopy.events.push({
        id: maxId + 1,
        name: name,
        place: place,
        date: date,
        time: time
      });

      return {
        ...state,
        events: stateCopy.events,
        newName: '',
        newNameValid: false,
        newWhere: '',
        newWhereValid: false,
        newDate: '',
        newDateValid: false,
        newHour: '',
        newHourValid: false
      };
    case constants.EVENTS_GET_START:
      return { ...state, isLoading: true };
    case constants.EVENTS_GET_SUCCESS:
      return { ...state, isLoading: false, events: action.payload.data };
    case constants.EVENTS_GET_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
