import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  
  return (
    <h2 className={`TodoCounter ${loading && 'TodoSearch--loading'} `}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
