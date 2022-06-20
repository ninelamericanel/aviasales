import { ActionType } from '../actionTypes';
import { TicketType } from '../types';

export const clickActionCreator = (id: number) => ({ type: ActionType.CLICK, id });
export const checkActionCreator = (id: number) => ({ type: ActionType.CHECK, id });
export const checkAllActionCreator = () => ({ type: ActionType.CHECK_ALL });
export const checkAutomaticActionCreator = () => ({ type: ActionType.CHECK_AUTOMATIC });

export const setTicketsActionCreator = (tickets: TicketType[]) => ({ type: ActionType.SET_TICKETS, tickets });
