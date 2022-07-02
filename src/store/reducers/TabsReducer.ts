import { Action, ActionType } from 'actionTypes';
import { TabsType } from 'types';

interface InitialState {
  tabs: TabsType[];
}

const initialState: InitialState = {
  tabs: [
    { id: 1, name: 'САМЫЙ ДЕШЕВЫЙ', isActive: true },
    { id: 2, name: 'САМЫЙ БЫСТРЫЙ', isActive: false },
    { id: 3, name: 'ОПТИМАЛЬНЫЙ', isActive: false },
  ],
};

const TabsReducer = (state = initialState, action: Action) => {
  const { tabs } = state;
  switch (action.type) {
    case ActionType.SET_TAB:
      return {
        ...state,
        tabs: tabs.map((item) =>
          item.id === action.id ? { ...item, isActive: !item.isActive } : { ...item, isActive: false }
        ),
      };
    default:
      return state;
  }
};

export default TabsReducer;
