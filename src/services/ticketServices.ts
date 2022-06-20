// export default class TicketServices {

export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  return response.json();
};
// }
