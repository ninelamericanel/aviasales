import { TicketType } from './types';

export enum ActionType {
  CHECK = 'CHECK',
  CHECK_ALL = 'CHECK_ALL',
  CHECK_AUTOMATIC = 'CHECK_AUTOMATIC',
  CLICK = 'CLICK',
  SET_TICKETS = 'SET_TICKETS',
}

interface ActionCheck {
  type: ActionType.CHECK;
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
}

export type Action = ActionSetTickets | ActionCheck | ActionCheckAll | ActionCheckAutomatic | ActionClick;
