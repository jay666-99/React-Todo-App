import React from 'react';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
