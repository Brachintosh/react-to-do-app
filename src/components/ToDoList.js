import React from 'react';
import Todo from './Todo.js';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
// console.log('todos :>> ', todos);

  return (
    <div className='todo-container' >
      <ul className='todo-list' >
        {/* <Todo /> */}
        {
          filteredTodos?.map((todo) => (
            <Todo 
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              completed={todo.completed}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;