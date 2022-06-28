import { ObjectTickets } from 'types';

import { ActionType } from '../actionTypes';

export const setTab = (id: number) => ({ type: ActionType.SET_TAB, id });
export const checkActionCreator = (id: number) => ({ type: ActionType.CHECK, id });
export const checkAllActionCreator = (array: [] | number[]) => ({ type: ActionType.CHECK_ALL, array });
export const checkAutomaticActionCreator = () => ({ type: ActionType.CHECK_AUTOMATIC });
export const unCheckActionCreator = (id: number) => ({
  type: ActionType.UNCHECK,
  id,
});
export const unCheckAutomatic = () => ({ type: ActionType.UNCHECK_AUTOMATIC });
export const setTicketsActionCreator = (tickets: ObjectTickets) => ({
  type: ActionType.SET_TICKETS,
  tickets,
});
export const setErrorActionCreator = () => ({ type: ActionType.SET_ERROR });
export const setLoad = (active: boolean) => ({ type: ActionType.SET_LOADER, active });
