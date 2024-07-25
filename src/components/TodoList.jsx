import React from 'react'
import Todoitem from './Todoitem'

function TodoList({todos}) {
  return (
	<div>
		{todos.map(item=>(
			<Todoitem key={item} item={item}/>
		)
		)}
	</div>
  )
}

export default TodoList