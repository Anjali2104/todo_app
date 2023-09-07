import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import TodoList from './components/TodoList/TodoList'
import { Provider} from 'react-redux'
import store from './store'
function App() {


  return (
    <>
    <Provider store={store}>
     
       <AddToDo />
       <TodoList  />
   
     </Provider>
    </>
  )
}

export default App
