import { ActionType } from '../actionTypes';

export const clickActionCreator = (id: number) => ({ type: ActionType.CLICK, id });
export const checkActionCreator = (id: number) => ({ type: ActionType.CHECK, id });
export const checkAllActionCreator = () => ({ type: ActionType.CHECK_ALL });
export const checkAutomaticActionCreator = () => ({ type: ActionType.CHECK_AUTOMATIC });
