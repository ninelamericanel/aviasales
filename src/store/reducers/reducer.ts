import { combineReducers } from 'redux';

import FilterReducer from './FilterReducer';
import TabsReducer from './TabsReducer';
import TicketsReducer from './TicketsReducer';

const reducer = combineReducers({ TabsReducer, FilterReducer, TicketsReducer });

export default reducer;
