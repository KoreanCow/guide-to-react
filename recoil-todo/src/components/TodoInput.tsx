import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoList } from '../recoil/todoState';

const TodoInput = () => {
  const [text, setText] = useState<string>('');
  const setTodoList = useSetRecoilState(todoList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodoList((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        text: text,
        isCompleted: false
      }
    ])
    setText('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add new todo'
        />
        <button type='submit'> Add</button>
      </form>
    </>
  )
}

export default TodoInput
