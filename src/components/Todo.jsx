import React from 'react'
import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
	const [todos, setTodos]=useState([]);	
	const done=todos.filter((todo)=>todo.done==true).length;
	const total=todos.length;
  return (
	<div>
		<Form todos={todos} setTodos={setTodos}/>
		<TodoList todos={todos} setTodos={setTodos}/>
		<Footer done={done} total={total}/>
	</div>
  )
}

export default Todo