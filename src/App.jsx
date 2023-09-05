
import {  useReducer} from 'react'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'
import TodoReducer from './reducers/TodoReducer'
function App() {

  const [todos, dispatch] = useReducer(TodoReducer, []);
 



  return (
    <>
     <TodoContext.Provider value= {{todos, dispatch}}>
       <AddToDo />
       <TodoList  />
     </TodoContext.Provider>
    
    </>
  )
}

export default App
