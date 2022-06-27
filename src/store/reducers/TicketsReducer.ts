import { Action, ActionType } from 'actionTypes';
import { TicketType } from 'types';

export interface InitialStateType {
  tickets: TicketType[];
  load: boolean;
  error: boolean;
}

const initialState: InitialStateType = {
  tickets: [],
  load: false,
  error: false,
};

const TicketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        load: !state.load,
        error: !state.error,
      };
    case ActionType.SET_LOADER:
      return {
        ...state,
        load: action.active,
      };
    default:
      return state;
  }
};

export default TicketsReducer;
