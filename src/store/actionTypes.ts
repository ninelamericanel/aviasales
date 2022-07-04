import { ActionType } from 'store/constants';
import { TicketType } from 'types';

interface ActionIncViewTickets {
  type: ActionType.INC_VIEW_TICKETS;
  count?: number;
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

interface ActionSetPreloading {
  type: ActionType.SET_PRELOADING;
}

export type Action =
  | ActionSetPreloading
  | ActionIncViewTickets
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
