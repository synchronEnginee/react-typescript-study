import React, {useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import {Todo} from './todo.model'
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// typescriptで書き換える.React.FCはreactから提供されているtypes
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  //prevTodosで直前の状態を渡すことで、追加処理が実装できる
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos =>  [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }
  return <div className="App">
    <NewTodo onAddTodo={todoAddHandler} />
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
  </div>
}

export default App;
