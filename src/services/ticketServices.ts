export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  return response.json();
};

export const getTickets = async () => {
  const response = await fetch(
    'https://aviasales-test-api.kata.academy/tickets?searchId=4d29fc545c5f1670c083229c30cd9d3a'
  );
  return response.json();
};
