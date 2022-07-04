import { Dispatch } from 'redux';

import { ticketsAPI } from '../services';

import { setError, setLoad, setTickets } from './actions';

export const getTicketsThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const searchId = await ticketsAPI.getSearchId();
      let result = await ticketsAPI.getTickets(searchId);
      dispatch(setLoad(true));
      dispatch(setTickets(result.tickets));
      while (!result.stop) {
        result = await ticketsAPI.getTickets(searchId);
        dispatch(setTickets(result.tickets));
      }
      if (result.stop) dispatch(setLoad(false));
    } catch {
      dispatch(setError(true));
    }
  };
};
