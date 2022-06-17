import { Action } from 'actionTypes';

import { initialState } from '../initialState';

const FilterReducer = (state = initialState, action: Action) => {
  const { checkboxes, checkboxAll } = state;
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        checkboxAll: false,
        checkboxes: checkboxes.map((item) => (item.id === action.id ? { ...item, isChecked: !item.isChecked } : item)),
      };
    case 'CHECK_ALL':
      return {
        ...state,
        checkboxAll: !checkboxAll,
        checkboxes: checkboxAll
          ? checkboxes.map((item) => ({ ...item, isChecked: false }))
          : checkboxes.map((item) => ({ ...item, isChecked: true })),
      };
    case 'CHECK_AUTOMATIC':
      return {
        ...state,
        checkboxAll: true,
      };
    default:
      return state;
  }
};

export default FilterReducer;
