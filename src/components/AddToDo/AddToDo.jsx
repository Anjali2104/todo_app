import React, { useState } from 'react'

const AddToDo = ({addTodos}) => {
  const [todoText , setTodoText] = useState('');
  return (
    <div>
      <input
      placeholder='add your next todo...'
      onChange={(e) => setTodoText(e.target.value)} 
      value = {todoText}
      />
      <button onClick={() => {
        addTodos(todoText);
        setTodoText('');
      }}>Submit</button>
    </div>
  )
}

export default AddToDo
