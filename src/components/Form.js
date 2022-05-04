import React from 'react';
import Swal from 'sweetalert2';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  
  const inputTextHandler = (e) => {
    // console.log('Soy e :>> ', e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {
        text: inputText,
        completed: false,
        id: Math.random()*1000,
      }
    ]);
    //  Reset the input form:
    setInputText('');

    popUpToast.fire({
      icon: 'success',
      title: 'To Do item was added successfully!',
      footer: 'Nice job! 😎 ',
    });
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
    // console.log(e.target.value);
  };

  const popUpToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1750,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  });
  
  

  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler} >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
