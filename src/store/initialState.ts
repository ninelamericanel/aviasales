import { CheckboxType } from '../types';

export interface InitialStateType {
  checkboxes: CheckboxType[];
  checkboxAll: boolean;
}

export const initialState: InitialStateType = {
  checkboxes: [
    { id: 1, name: 'Без пересадок', isChecked: false },
    { id: 2, name: '1 пересадка', isChecked: false },
    { id: 3, name: '2 пересадки', isChecked: false },
    { id: 4, name: '3 пересадки', isChecked: false },
  ],
  checkboxAll: false,
};
