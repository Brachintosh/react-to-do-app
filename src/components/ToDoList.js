import React from 'react';
import Todo from './Todo.js';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className='todo-container' >
      <ul className='todo-list' >
        {/* <Todo /> */}
        {
          filteredTodos?.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;