import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { SearchTodos } from '../SearchTodos';
import { TodoForm } from '../TodoForm';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, completedTodos,
    searchValue, setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          
        <TodoSearch 
          searchValue ={searchValue}
          setSearchValue ={setSearchValue}
        />
      </TodoHeader>
      

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos/>}
        searchValue = {searchValue}
        onSearch = {(searchValue) => <SearchTodos text={searchValue}
        />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {!!openModal && (
        <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
      <ChangeAlertWithStorageListener 
      sincronize={sincronizeTodos}/>
    </React.Fragment>
  );
}



export default App;
