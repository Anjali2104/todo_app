import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

const AddToDo = () => {
  const { dispatch} = useContext(TodoContext)
  const [todoText , setTodoText] = useState('');

  function addTodo(todoText){
    dispatch({type: 'add_todo', payload: {todoText}})
  }

  return (
    <div>
      <input
      placeholder='add your next todo...'
      onChange={(e) => setTodoText(e.target.value)} 
      value = {todoText}
      />
      <button onClick={() => {
        addTodo(todoText);
        setTodoText('');
      }}>Submit</button>
    </div>
  )
}

export default AddToDo
