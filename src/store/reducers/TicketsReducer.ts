import { Action, ActionType } from 'actionTypes';
import { TicketType } from 'types';

export interface InitialStateType {
  tickets: TicketType[];
}

const initialState: InitialStateType = {
  tickets: [],
};

const TicketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    default:
      return state;
  }
};

export default TicketsReducer;
