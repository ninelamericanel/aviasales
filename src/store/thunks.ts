import { Dispatch } from 'redux';

import { ticketsAPI } from '../services';

import { setErrorActionCreator, setLoad, setTicketsActionCreator } from './actionCreators';

export const getTicketsThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const searchId = await ticketsAPI.getSearchId();
      let result = await ticketsAPI.getTickets(searchId);
      dispatch(setLoad(true));
      dispatch(setTicketsActionCreator(result.tickets));
      while (!result.stop) {
        result = await ticketsAPI.getTickets(searchId);
        dispatch(setTicketsActionCreator(result.tickets));
      }
      if (result.stop) dispatch(setLoad(false));
    } catch {
      dispatch(setErrorActionCreator(true));
    }
  };
};
