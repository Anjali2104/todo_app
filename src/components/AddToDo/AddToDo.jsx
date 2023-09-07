import React, {  useState } from 'react'

import { useDispatch } from 'react-redux';

const AddToDo = () => {
  const dispatch = useDispatch(); 
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
