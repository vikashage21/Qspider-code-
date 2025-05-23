import React from 'react'

function Button({tittle="Click Me"}) {
  return (
// creating a component button

    <div>
<button className="btn"> {tittle} </button>
      
    </div>
  )
}

export default Button
