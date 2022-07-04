import { TicketType } from './types';

export function checkingSuffix(length: number) {
  if (length === 0) return 'Без пересадок';
  if (length === 1) return `${length} пересадка`;
  if (length > 1 && length < 5) return `${length} пересадки`;
}

export function formatTime(time: number) {
  if (time < 10) return `0${time}`;
  return `${time}`;
}

export function arrivalTimeCalculation(date: string, duration: number): string {
  const time = new Date(date);
  const arrivedTime = new Date(time.setMinutes(time.getMinutes() + duration));
  return `${formatTime(arrivedTime.getHours())}:${formatTime(arrivedTime.getMinutes())}`;
}

export function sortingTickets(idActiveTab: number, tickets: TicketType[]) {
  if (idActiveTab === 1) return tickets.sort(sortByPrice);
  if (idActiveTab === 2) return tickets.sort(sortByDuration);
  if (idActiveTab === 3) return tickets.sort(sortOptimal);
}

function sortByPrice(a: TicketType, b: TicketType) {
  if (a.price > b.price) return 1;
  return -1;
}
function sortByDuration(a: TicketType, b: TicketType) {
  const durationA = a.segments[0].duration;
  const durationB = b.segments[0].duration;
  if (durationA > durationB) return 1;
  return -1;
}

function sortOptimal(a: TicketType, b: TicketType) {
  const durationA = a.segments[0].duration;
  const durationB = b.segments[0].duration;
  if (durationA > durationB && a.price > b.price) return 1;
  return -1;
}
