import { atom } from 'recoil';

export interface ITodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const todoList = atom<ITodoItem[]>({
  key: 'todoListState',
  default: [
    {
      id: 0,
      text: 'Rec0oil TodoList',
      isCompleted: false
    }, {
      id: 1,
      text: 'Re1coil TodoList',
      isCompleted: false
    }, {
      id: 2,
      text: 'R2ecoil TodoList',
      isCompleted: false
    }, {
      id: 3,
      text: '3Recoil TodoList',
      isCompleted: true
    },
  ]
});