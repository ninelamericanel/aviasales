import { Dispatch } from 'redux';

import { getTickets } from 'services/ticketServices';

import { setErrorActionCreator, setTicketsActionCreator } from './actionCreators';

export const getTicketsThunk = (searchId: string) => (dispatch: Dispatch) => {
  getTickets(searchId)
    .then((result) => {
      dispatch(setTicketsActionCreator(result.tickets, result.stop));
    })
    .catch(() => dispatch(setErrorActionCreator()));
};
