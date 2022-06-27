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
  SET_IDS_TICKETS = 'SET_IDS_TICKETS',
  UNCHECK_ALL = 'UNCHECK_ALL',
  SORT = 'SORT',
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
}

interface ActionUnCkeckAutomatic {
  type: ActionType.UNCHECK_AUTOMATIC;
}

interface ActionFilterTickets {
  type: ActionType.FILTER_TICKETS;
  filter: number;
  ids: string[];
}

interface ActionSetIdsTickets {
  type: ActionType.SET_IDS_TICKETS;
  ids: string[];
  idCheckbox: number;
}

interface ActionUnCheckAll {
  type: ActionType.UNCHECK_ALL;
}

interface ActionSort {
  type: ActionType.SORT;
  callback: (id: number) => number;
}

export type Action =
  | ActionSort
  | ActionUnCheckAll
  | ActionSetIdsTickets
  | ActionFilterTickets
  | ActionUnCkeckAutomatic
  | ActionUnCheck
  | ActionSetLoader
  | ActionSetTickets
  | ActionCheck
  | ActionCheckAll
  | ActionCheckAutomatic
  | ActionSetTab
  | ActionSetError;
