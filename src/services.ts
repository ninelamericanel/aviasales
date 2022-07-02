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
  stop: boolean;
}

export const ticketsAPI = {
  getSearchId() {
    return instance.get<SearchIdResponse>('search').then((res) => res.data.searchId);
  },
  // @ts-ignore
  async getTickets(searchId: string, call = 0) {
    try {
      let response = await instance.get<TicketsResponse>(`tickets?searchId=${searchId}`);
      return response.data;
    } catch (error) {
      if (call == 3) throw new Error('Something wrong happened');
      return this.getTickets(searchId, ++call);
    }
  },
};
