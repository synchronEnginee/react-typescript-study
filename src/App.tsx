import React from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// typescriptで書き換える.React.FCはreactから提供されているtypes
const App: React.FC = () => {
  const todos = [{id: 't1', text: 'TypeScriptコース完了！'}]
  return <div className="App">
    <NewTodo />
    <TodoList items={todos}></TodoList>
  </div>
}

export default App;
