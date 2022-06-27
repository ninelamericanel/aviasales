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
    { id: 0, name: 'Без пересадок' },
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
  ],
  checkboxAll: false,
};

const FilterReducer = (state = initialState, action: Action) => {
  const { checkboxes } = state;
  switch (action.type) {
    case ActionType.SET_IDS_TICKETS:
      return {
        ...state,
        checkboxes: checkboxes.map((item) => {
          if (item.id === action.idCheckbox) return { ...item, ticketsIds: action.ids };
          return item;
        }),
      };
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
        checkboxAll: !state.checkboxAll,
        isChecked: action.array,
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
