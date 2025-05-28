import React from 'react'
import './style.css'
import Button from './Button'
import Parent from './Parent'
import Parentdrill from './propDrilling/Parentdrill.jsx'
function App() {
  return (
    <div>
      <h1 style={{ fontSize: '70px' }}>Hello World</h1>
      <Button tittle="Click Me" />
      <Parent/>
      <Parentdrill/>

    </div>
  )
}

export default App
