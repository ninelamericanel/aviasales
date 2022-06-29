import { TicketType } from './types';

export enum ActionType {
  CHECK = 'CHECK',
  CHECK_ALL = 'CHECK_ALL',
  CHECK_AUTOMATIC = 'CHECK_AUTOMATIC',
  SET_TAB = 'SET_TAB',
  SET_TICKETS = 'SET_TICKETS',
  SET_LOADER = 'SET_LOADER',
  SET_ERROR = 'SET_ERROR',
  UNCHECK = 'UNCHECK',
  UNCHECK_AUTOMATIC = 'UNCHECK_AUTOMATIC',
  FILTER_TICKETS = 'FILTER_TICKETS',
  UNCHECK_ALL = 'UNCHECK_ALL',
}

interface ActionCheck {
  type: ActionType.CHECK;
  id: number;
}

interface ActionUnCheck {
  type: ActionType.UNCHECK;
  id: number;
}

interface ActionCheckAll {
  type: ActionType.CHECK_ALL;
  array: [] | number[];
  statusForCheckbox: boolean;
}

interface ActionCheckAutomatic {
  type: ActionType.CHECK_AUTOMATIC;
}

interface ActionSetTab {
  type: ActionType.SET_TAB;
  id: number;
}

interface ActionSetTickets {
  type: ActionType.SET_TICKETS;
  tickets: TicketType[];
}

interface ActionSetLoader {
  type: ActionType.SET_LOADER;
  active: boolean;
}

interface ActionSetError {
  type: ActionType.SET_ERROR;
  error: boolean;
}

interface ActionUnCheckAutomatic {
  type: ActionType.UNCHECK_AUTOMATIC;
}

interface ActionFilterTickets {
  type: ActionType.FILTER_TICKETS;
  filter: number;
  ids: string[];
}

interface ActionUnCheckAll {
  type: ActionType.UNCHECK_ALL;
}

export type Action =
  | ActionUnCheckAll
  | ActionFilterTickets
  | ActionUnCheckAutomatic
  | ActionUnCheck
  | ActionSetLoader
  | ActionSetTickets
  | ActionCheck
  | ActionCheckAll
  | ActionCheckAutomatic
  | ActionSetTab
  | ActionSetError;
