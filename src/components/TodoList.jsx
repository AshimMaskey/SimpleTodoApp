import React from 'react'
import Todoitem from './Todoitem'

function TodoList({todos, setTodos}) {
	const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
	<div className='flex mt-3 justify-center'>
		<div>
		{sortedTodos.map(item=>(
			<Todoitem key={item.name} setTodos={setTodos} todos={todos} item={item}/>
		)
		)}
	</div>
	</div>
  )
}

export default TodoList