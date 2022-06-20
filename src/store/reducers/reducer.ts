import { combineReducers } from 'redux';

import FilterReducer from './FilterReducer';
import TabsReducer from './TabsReducer';
import TicketsReducer from './TicketsReducer';
import SearchIdReducer from './SearchIdReducer';

const reducer = combineReducers({ TabsReducer, FilterReducer, TicketsReducer, SearchIdReducer });

export default reducer;
