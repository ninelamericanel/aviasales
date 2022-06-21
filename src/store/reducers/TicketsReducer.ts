import { Action, ActionType } from 'actionTypes';
import { TicketType } from 'types';

export interface InitialStateType {
  tickets: TicketType[];
  load: boolean;
  error: boolean;
}

const initialState: InitialStateType = {
  tickets: [],
  load: true,
  error: false,
};

const TicketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
        load: action.load,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: !state.error,
      };
    default:
      return state;
  }
};

export default TicketsReducer;
