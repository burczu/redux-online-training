import { combineReducers } from 'redux';

import { eventsReducer } from './eventsReducer';
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({
  eventsStore: eventsReducer,
  detailsStore: detailsReducer
});

export default rootReducer;
