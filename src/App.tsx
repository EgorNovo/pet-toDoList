import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList';
import InputTask from './components/TaskInput';
import store from '../store/store';
import React from 'react';
import './App.css'

function App() {
  return (
    <React.StrictMode>
      <Provider store = { store }>
        <InputTask />
        <ToDoList />
      </Provider>
    </React.StrictMode>
  )
}

export default App
