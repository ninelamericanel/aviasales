export enum ActionType {
  CHECK = 'CHECK',
  CHECK_ALL = 'CHECK_ALL',
  CHECK_AUTOMATIC = 'CHECK_AUTOMATIC',
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

export type Action = ActionCheck | ActionCheckAll | ActionCheckAutomatic;
