import './index.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
const Todo = () => {
  return (
    <div >
      <h1>TODO LIST</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default Todo;