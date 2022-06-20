export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  return response.json();
};

export const getTickets = async (searchId: string) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  return response.json();
};
