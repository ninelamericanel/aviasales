import { Action, ActionType } from 'actionTypes';

export interface InitialStateType {
  searchId: string;
}

const initialState: InitialStateType = {
  searchId: '',
};

const SearchIdReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.searchId,
      };
    default:
      return state;
  }
};

export default SearchIdReducer;
