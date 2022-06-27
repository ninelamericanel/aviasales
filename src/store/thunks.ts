import { Dispatch } from 'redux';

import { getTickets } from 'services/ticketServices';

import { TicketType } from '../types';

import { setErrorActionCreator, setLoad, setTicketsActionCreator } from './actionCreators';

export const getTicketsThunk = (searchId: string, stops: number[]) => {
  return (dispatch: Dispatch) => {
    getTickets(searchId)
      .then((result) => {
        const filterTickets = result.tickets.filter((ticket: TicketType) =>
          stops.includes(ticket.segments[0].stops.length)
        );
        dispatch(setTicketsActionCreator(filterTickets));
        dispatch(setLoad(false));
      })
      .catch(() => {
        dispatch(setErrorActionCreator());
        dispatch(setLoad(false));
      });
  };
};

// export const getTicketsThunk = (searchId: string) => {
//   return (dispatch: Dispatch) => {
//     getTickets(searchId)
//       .then((result) => {
//         const allTickets: ObjectTickets = result.tickets.reduce(
//           (newObj: ObjectTickets, item: TicketType, index: number) => {
//             newObj[index] = item;
//             return newObj;
//           },
//           {}
//         );
//         const obj: Object = {
//           threeStops: [],
//           twoStops: [],
//           oneStops: [],
//           withoutStops: [],
//         };
//         const ids = Object.keys(allTickets);
//         ids.forEach((item) => {
//           const stops = allTickets[+item].segments[0].stops.length;
//           if (stops === 3) obj.threeStops.push(item);
//           if (stops === 2) obj.twoStops.push(item);
//           if (stops === 1) obj.oneStops.push(item);
//           if (stops === 0) obj.withoutStops.push(item);
//         });
//         dispatch(setIdsTickets(obj.threeStops, 3));
//         dispatch(setIdsTickets(obj.twoStops, 2));
//         dispatch(setIdsTickets(obj.oneStops, 1));
//         dispatch(setIdsTickets(obj.withoutStops, 0));
//         // const ticketsInfo = { allTickets, ...reducer };
//         dispatch(setTicketsActionCreator(allTickets));
//         dispatch(setLoad(false));
//       })
//       .catch(() => {
//         dispatch(setErrorActionCreator());
//         dispatch(setLoad(false));
//       });
//   };
// };
