import { Provider } from 'react-redux'
import {store} from "./store/store"
import './App.css'
import AddTodo from "./components/AddTodo"
import Todos from './components/Todos'

function App() {



  return (
    <Provider store={store}>
       <AddTodo/>
       <Todos/>
        
    </Provider>
  )
}

export default App
