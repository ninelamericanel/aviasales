import { TicketType } from './types';

export enum ActionType {
  CHECK = 'CHECK',
  CHECK_ALL = 'CHECK_ALL',
  CHECK_AUTOMATIC = 'CHECK_AUTOMATIC',
  CLICK = 'CLICK',
  SET_TICKETS = 'SET_TICKETS',
  SET_LOADER = 'SET_LOADER',
  SET_ERROR = 'SET_ERROR',
  UNCHECK = 'UNCHECK',
  UNCHECK_AUTOMATIC = 'UNCHECK_AUTOMATIC',
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
}

interface ActionCheckAutomatic {
  type: ActionType.CHECK_AUTOMATIC;
}

interface ActionClick {
  type: ActionType.CLICK;
  id: number;
}

interface ActionSetTickets {
  type: ActionType.SET_TICKETS;
  tickets: TicketType[];
  load: boolean;
}

interface ActionSetLoader {
  type: ActionType.SET_LOADER;
  load: boolean;
}

interface ActionSetError {
  type: ActionType.SET_ERROR;
}

interface ActionUnCkeckAutomatic {
  type: ActionType.UNCHECK_AUTOMATIC;
}

export type Action =
  | ActionUnCkeckAutomatic
  | ActionUnCheck
  | ActionSetLoader
  | ActionSetTickets
  | ActionCheck
  | ActionCheckAll
  | ActionCheckAutomatic
  | ActionClick
  | ActionSetError;
