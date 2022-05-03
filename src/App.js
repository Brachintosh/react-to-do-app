import React, { useState } from 'react';
import './App.css';
// import checkMark from './assets/logo-check.png'
import Swal from 'sweetalert2'
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');
  const [ filteredTodos, setFilteredTodos] = useState([]);

  //  Pop up after loading the page:
  // Swal.fire({
  //   title: 'Wellcome!',
  //   text: 'Do you want to enter?',
  //   icon: 'success',
  //   confirmButtonText: 'Check it!'
  // });

  return (
    <div className="App">
      
      <header>
        To Do App
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
