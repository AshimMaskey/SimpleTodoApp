import React from 'react'

function Todoitem({item}) {
  return (
	<h3 key={item}>{item}</h3>
  )
}

export default Todoitem