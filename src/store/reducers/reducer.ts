import { combineReducers } from 'redux';

import FilterReducer from './FilterReducer';
import TabsReducer from './TabsReducer';

const reducer = combineReducers({ TabsReducer, FilterReducer });

export default reducer;
