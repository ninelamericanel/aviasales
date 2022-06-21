export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  return response.json();
};

export const getTickets = async (searchId: string) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  if (!response.ok) throw new Error(`Something wrong happen, ${response.status}`);
  return response.json();
};
