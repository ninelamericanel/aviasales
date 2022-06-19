export enum ActionType {
  CHECK = 'CHECK',
  CHECK_ALL = 'CHECK_ALL',
  CHECK_AUTOMATIC = 'CHECK_AUTOMATIC',
  CLICK = 'CLICK',
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

export type Action = ActionCheck | ActionCheckAll | ActionCheckAutomatic | ActionClick;
