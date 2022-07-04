import { ActionType } from 'store/constants';
import { TicketType } from 'types';

export const setTab = (id: number) => ({ type: ActionType.SET_TAB, id });
export const check = (id: number) => ({ type: ActionType.CHECK, id });
export const unCheck = (id: number) => ({
  type: ActionType.UNCHECK,
  id,
});
export const checkAll = (array: number[], statusForCheckbox: boolean) => ({
  type: ActionType.CHECK_ALL,
  array,
  statusForCheckbox,
});
export const checkAutomatic = () => ({ type: ActionType.CHECK_AUTOMATIC });
export const unCheckAutomatic = () => ({ type: ActionType.UNCHECK_AUTOMATIC });
export const setTickets = (tickets: TicketType[]) => ({
  type: ActionType.SET_TICKETS,
  tickets,
});
export const setError = (error: boolean) => ({ type: ActionType.SET_ERROR, error });
export const setLoad = (active: boolean) => ({ type: ActionType.SET_LOADER, active });
export const incViewTickets = (count?: number) => ({ type: ActionType.INC_VIEW_TICKETS, count });
