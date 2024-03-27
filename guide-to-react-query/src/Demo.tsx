import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTodo, fetchTodos } from './api';
import TodoCard from './components/TodoCard';

const Demo = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }],
    staleTime: Infinity,
    // cacheTime: 0,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  })

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <button onClick={async () => {
        try {
          await addTodoMutation({ title })
          setTitle('');
        } catch (e) {
          console.error(e);
        }
      }}> Add Todo </button>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  )
}

export default Demo
