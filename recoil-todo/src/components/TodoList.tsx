import React, { useState } from 'react'

import { useRecoilValue } from 'recoil'
import { allTodoSelector, completedTodoSelector, notCompletedTodoSelector } from '../recoil/todoSelectors';
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const TodoList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allTodos = useRecoilValue(allTodoSelector);
  const completedTodos = useRecoilValue(completedTodoSelector);
  const notCompletedTodos = useRecoilValue(notCompletedTodoSelector);

  const selectedTodos = (category: string) => {
    switch (category) {
      case 'completed':
        return completedTodos;
      case 'notCompleted':
        return notCompletedTodos;
      case 'all':
      default:
        return allTodos;
    }
  };

  return (
    <div>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='notCompleted'>Not Completed</option>
      </select>
      <TodoItem todos={selectedTodos(selectedCategory)} />
      <TodoInput />
    </div>
  )
}

export default TodoList
