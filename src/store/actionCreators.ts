import { ActionType } from '../actionTypes';
import { TicketType } from '../types';

export const clickActionCreator = (id: number) => ({ type: ActionType.CLICK, id });
export const checkActionCreator = (id: number) => ({ type: ActionType.CHECK, id });
export const checkAllActionCreator = () => ({ type: ActionType.CHECK_ALL });
export const checkAutomaticActionCreator = () => ({ type: ActionType.CHECK_AUTOMATIC });
export const unCheckActionCreator = (id: number) => ({
  type: ActionType.UNCHECK,
  id,
});
export const unCheckAutomatic = () => ({ type: ActionType.UNCHECK_AUTOMATIC });

export const setTicketsActionCreator = (tickets: TicketType[], load: boolean) => ({
  type: ActionType.SET_TICKETS,
  tickets,
  load,
});
export const setErrorActionCreator = () => ({ type: ActionType.SET_ERROR });
// export const setLoaderActionCreator = (load: boolean) => ({ type: ActionType.SET_LOADER, load });
