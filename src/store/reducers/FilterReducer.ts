import { Action, ActionType } from 'actionTypes';
import { CheckboxType } from 'types';

export interface InitialStateType {
  checkboxes: CheckboxType[];
  checkboxAll: boolean;
  isChecked: number[];
}

const initialState: InitialStateType = {
  isChecked: [0],
  checkboxes: [
    { id: 0, name: 'Без пересадок', isChecked: true },
    { id: 1, name: '1 пересадка', isChecked: false },
    { id: 2, name: '2 пересадки', isChecked: false },
    { id: 3, name: '3 пересадки', isChecked: false },
  ],
  checkboxAll: false,
};

const FilterReducer = (state = initialState, action: Action) => {
  const { checkboxes } = state;
  switch (action.type) {
    case ActionType.CHECK:
      return {
        ...state,
        isChecked: [...state.isChecked, action.id],
        checkboxes: checkboxes.map((item) => {
          if (item.id === action.id) return { ...item, isChecked: true };
          return item;
        }),
        checkboxAll: false,
      };
    case ActionType.UNCHECK:
      return {
        ...state,
        checkboxes: checkboxes.map((item) => {
          if (item.id === action.id) return { ...item, isChecked: false };
          return item;
        }),
        isChecked: state.isChecked.filter((id) => action.id !== id),
      };
    case ActionType.CHECK_ALL:
      return {
        ...state,
        checkboxAll: !state.checkboxAll,
        isChecked: action.array,
        checkboxes: checkboxes.map((item) => {
          return {
            ...item,
            isChecked: action.statusForCheckbox,
          };
        }),
      };
    case ActionType.CHECK_AUTOMATIC:
      return {
        ...state,
        checkboxAll: true,
      };
    case ActionType.UNCHECK_AUTOMATIC:
      return {
        ...state,
        checkboxAll: false,
      };
    default:
      return state;
  }
};

export default FilterReducer;
