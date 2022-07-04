import { ActionType } from 'store/constants';
import { Action } from 'store/actionTypes';
import { TicketType } from 'types';

export interface InitialStateType {
  tickets: TicketType[];
  countTicketsView: number;
  load: boolean;
  error: boolean;
}

const initialState: InitialStateType = {
  countTicketsView: 5,
  tickets: [],
  load: false,
  error: false,
};

const TicketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        load: !state.load,
        error: action.error,
      };
    case ActionType.INC_VIEW_TICKETS: {
      return {
        ...state,
        countTicketsView: action.count ? action.count : state.countTicketsView + 5,
      };
    }
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
