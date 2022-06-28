import { Dispatch } from 'redux';

import { getTickets } from 'services/ticketServices';

import { TicketType } from '../types';

import { setErrorActionCreator, setLoad, setTicketsActionCreator } from './actionCreators';

export const getTicketsThunk = (searchId: string, stops: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch(setErrorActionCreator(false));
    dispatch(setLoad(true));
    getTickets(searchId)
      .then((result) => {
        const filterTickets = result.tickets.filter((ticket: TicketType) =>
          stops.includes(ticket.segments[0].stops.length)
        );
        dispatch(setTicketsActionCreator(filterTickets));
        dispatch(setLoad(false));
      })
      .catch(() => {
        dispatch(setErrorActionCreator(true));
        dispatch(setLoad(false));
      });
  };
};
