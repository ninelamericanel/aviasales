import axios from 'axios';

import { TicketType } from 'types';

const instance = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy/',
});

interface SearchIdResponse {
  searchId: string;
}

interface TicketsResponse {
  tickets: TicketType[];
  stops: boolean;
}

export const ticketsAPI = {
  getSearchId() {
    return instance.get<SearchIdResponse>('search').then((res) => res.data.searchId);
  },
  getTickets(searchId: string) {
    return instance.get<TicketsResponse>(`tickets?searchId=${searchId}`).then((res) => res.data);
  },
};

// export const getSearchId = async () => {
//   const response = await fetch('https://aviasales-test-api.kata.academy/search');
//   return response.json();
// };
//
// export const getTickets = async (searchId: string) => {
//   const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
//   if (!response.ok) throw new Error(`Something wrong happen, ${response.status}`);
//   return response.json();
// };
