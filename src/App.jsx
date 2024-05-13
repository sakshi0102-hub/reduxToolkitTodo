import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Adjusted the path
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'; // Added import for Todos component

function App() {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1> {/* Adjusted the heading */}
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
