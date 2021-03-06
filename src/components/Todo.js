import React from 'react'
import Swal from 'sweetalert2';

const Todo = ({ text, todo, todos, setTodos }) => {
// EVENTS:
    const deleteHandler = () => {
      deletePopUp();  
      const newList = todos.filter((el) => el.id !== todo.id );
      setTodos(newList);
        console.log('todo :>> ', todo);
        
    };

    const completedHandler = () => {
      setTodos(
        todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, 
                    completed: !item.completed,
                };
            }
            return item;
        })
      );
    };

    const deletePopUp = () => {
      Swal.fire({
        title: "Item deleted!",
        type: "danger",
        confirmButtonClass: "btn-danger",
        confirmButtonText: "OK",
        // showCancelButton: true,
      }, 4500);
    };

  return (
    <div className='todo'>
        {/* Dynamic update completed props to change the className */}
        <li className={`todo-item ${todo.completed ? "completed" : '' }`} > {text} </li>
        <button onClick={completedHandler} className='complete-btn'>
            {/* CHECK MARK ICON */}
            <i className='fas fa-check' ></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            {/* RECYCLE BIN ICON */}
            <i className='fas fa-trash' ></i>
        </button>
    </div>
  )
}

export default Todo;