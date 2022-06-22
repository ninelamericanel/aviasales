import { Action, ActionType } from 'actionTypes';
import { CheckboxType } from 'types';

export interface InitialStateType {
  checkboxes: CheckboxType[];
  checkboxAll: boolean;
  isChecked: number[];
}

const initialState: InitialStateType = {
  isChecked: [],
  checkboxes: [
    { id: 1, name: 'Без пересадок' },
    { id: 2, name: '1 пересадка' },
    { id: 3, name: '2 пересадки' },
    { id: 4, name: '3 пересадки' },
  ],
  checkboxAll: false,
};

const FilterReducer = (state = initialState, action: Action) => {
  const { checkboxes, checkboxAll } = state;
  switch (action.type) {
    case ActionType.CHECK:
      return {
        ...state,
        isChecked: [...state.isChecked, action.id],
        checkboxAll: false,
      };
    case ActionType.UNCHECK:
      return {
        ...state,
        isChecked: state.isChecked.filter((id) => action.id !== id),
      };
    case ActionType.CHECK_ALL:
      return {
        ...state,
        checkboxAll: !checkboxAll,
        isChecked: [...checkboxes.map((checkbox) => checkbox.id)],
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
