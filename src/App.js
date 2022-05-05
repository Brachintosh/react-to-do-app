import React, { useState, useEffect } from 'react';
import './App.css';
// import checkMark from './assets/logo-check.png'
import Swal from 'sweetalert2'
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Player from './components/Player';

function App() {
  // const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';

  //  Intial states:
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //  Functions on events:
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //  RUN ONLY ONCE when the app starts:
  useEffect(() => {
    popUp();
    getLocalTodos()
  }, []);

  //  useEffect:
  useEffect(() => {
    // console.log('hey ! c.log >> ' );
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //  SAVE TO LOCAL STORAGE:
  const saveLocalTodos = () => {
    // Adding to localStorage:
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    // Cheking on localStorage:
    if(localStorage.getItem('todos') === null) {
      // localStorage.setItem('todos', JSON.stringify([]));
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      // console.log('Soy todosLocal :>> ', todosLocal);
      setTodos(todosLocal);
    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      // console.log('Soy todosLocal :>> ', todosLocal);
      setTodos(todosLocal);
      
    }
  };

  //  Pop up after loading the page:
  const popUp = () => { 
    Swal.fire({
      title: 'Wellcome!',
      text: 'Do you want to enter?',
      icon: 'success',
      confirmButtonText: 'Check it!'
    });
  }

  return (
    <div className="App">
      {/* <Player url={url} />   */}

      <div>
        <span> To Do List:</span>
      </div>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
                                                                                                                                                                                                                                                                         

    </div>
  );
}

export default App;
