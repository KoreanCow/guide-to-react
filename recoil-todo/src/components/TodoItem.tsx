import React, { useState } from 'react'
import { ITodoItem, todoList } from '../recoil/todoState'
import { RiDeleteBinLine } from "react-icons/ri";
import { useSetRecoilState } from 'recoil';

const TodoItem = ({ todos }: { todos: ITodoItem[] }) => {

  const [editTodo, setEditTodo] = useState<string>('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const setTodoList = useSetRecoilState(todoList);

  const handleCheckboxChange = (todoId: number) => {
    setTodoList(prevList =>
      prevList.map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }
  const handleRemoveTodo = (todoId: number) => {
    setTodoList(prevList =>
      prevList.filter(todo => todo.id !== todoId)
    )
  }
  const handleEdit = (todoId: number, text: string) => {
    setEditTodoId(todoId);
    setEditTodo(text);
  }
  const handleSaveEdit = (todoId: number) => {
    setTodoList(prevList =>
      prevList.map(todo => todo.id === todoId ? { ...todo, text: editTodo } : todo))
    setEditTodoId(null);
  }

  return (
    <div>
      {

        todos.map(todoItem => (
          <div key={todoItem.id}>
            {editTodoId === todoItem.id ? (
              <>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todoItem.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: todoItem.isCompleted ? 'line-through' : 'none' }}
                >{todoItem.text}</span>
                <input
                  type='checkbox'
                  checked={todoItem.isCompleted}
                  onChange={() => handleCheckboxChange(todoItem.id)}
                />
                <button onClick={() => handleEdit(todoItem.id, todoItem.text)}>Edit</button>
                <RiDeleteBinLine onClick={() => handleRemoveTodo(todoItem.id)} />
              </>
            )}



          </div>
        ))
      }
    </div>
  )
}

export default TodoItem
