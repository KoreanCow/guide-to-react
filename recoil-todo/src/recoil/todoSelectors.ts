import { selector } from 'recoil';
import { todoList } from './todoState';

export const allTodoSelector = selector({
  key: 'allTodos',
  get: ({ get }) => {
    return get(todoList);
  }
})

export const completedTodoSelector = selector({
  key: 'completedTodoSelector',
  get: ({ get }) => {
    const todos = get(todoList);
    return todos.filter(todo => todo.isCompleted)
  }
});

export const notCompletedTodoSelector = selector({
  key: 'notCompletedTodoSelector',
  get: ({ get }) => {
    const todos = get(todoList);
    return todos.filter(todo => !todo.isCompleted);
  }
})