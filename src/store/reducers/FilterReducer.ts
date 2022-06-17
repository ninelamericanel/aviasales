import { Action, ActionType } from 'actionTypes';
import { CheckboxType } from 'types';

export interface InitialStateType {
  checkboxes: CheckboxType[];
  checkboxAll: boolean;
}

const initialState: InitialStateType = {
  checkboxes: [
    { id: 1, name: 'Без пересадок', isChecked: false },
    { id: 2, name: '1 пересадка', isChecked: false },
    { id: 3, name: '2 пересадки', isChecked: false },
    { id: 4, name: '3 пересадки', isChecked: false },
  ],
  checkboxAll: false,
};

const FilterReducer = (state = initialState, action: Action) => {
  const { checkboxes, checkboxAll } = state;
  switch (action.type) {
    case ActionType.CHECK:
      return {
        ...state,
        checkboxAll: false,
        checkboxes: checkboxes.map((item) => (item.id === action.id ? { ...item, isChecked: !item.isChecked } : item)),
      };
    case ActionType.CHECK_ALL:
      return {
        ...state,
        checkboxAll: !checkboxAll,
        checkboxes: checkboxAll
          ? checkboxes.map((item) => ({ ...item, isChecked: false }))
          : checkboxes.map((item) => ({ ...item, isChecked: true })),
      };
    case ActionType.CHECK_AUTOMATIC:
      return {
        ...state,
        checkboxAll: true,
      };
    default:
      return state;
  }
};

export default FilterReducer;
