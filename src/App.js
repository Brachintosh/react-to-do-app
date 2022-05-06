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
    const todosLocal = JSON.parse(localStorage.getItem("todos"));
    if (todosLocal) {
      setTodos(todosLocal);
    }
    // getLocalTodos()
    popUp();
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
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  // const getLocalTodos = () => {
  //   // Checking on localStorage:
  //   if(localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   }else{
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     console.log('todoLocal :>> ', todoLocal);
  //     setTodos(todoLocal);
  //   };
  // };

  //  Pop up after loading the page:
  const popUp = () => { 
    Swal.fire({
      title: 'Wellcome!',
      text: 'Do you want to plan your day?',
      icon: 'success',
      confirmButtonText: 'To do it!',
      timer: 3750,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    });
  };

  return (
    <div className="App">
      <header>
        <h4>
          Brachintosh To Do List:
        </h4>
      {/* <Player url={url} />   */}
      </header>

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
