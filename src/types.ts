export interface CheckboxType {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface TabsType {
  id: number;
  name: string;
  isActive: boolean;
}

export interface StateType {
  FilterReducer: {
    checkboxes: CheckboxType[];
    checkboxAll: boolean;
  };
  TabsReducer: {
    tabs: TabsType[];
  };
};