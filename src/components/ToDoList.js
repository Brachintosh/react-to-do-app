import React from 'react';
import Todo from './Todo.js';

const ToDoList = ({ todos }) => {
console.log('todos :>> ', todos);

  return (
    <div className='todo-container' >
      <ul className='todo-list' >
        {/* <Todo /> */}
        {
          todos?.map((todo, index) => (
            <Todo 
              key={index}
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;