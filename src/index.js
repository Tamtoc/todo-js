import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/funciones';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo( tarea );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC1234');  hay un localstorage y sessionStorage por dominio
// sessionStorage.setItem('mi-key', 'ABC1234');    al cerrar la tarea del navegador se pierde

// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 1500 );




