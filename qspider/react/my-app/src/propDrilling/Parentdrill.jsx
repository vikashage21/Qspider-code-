import React from 'react'
import DrillChild from './DrillChild.jsx'

function Parentdrill() {
    let data = 'hello nested child'
  return (
    <div>
        <DrillChild data={data}/>
      
    </div>
  )
}

export default Parentdrill
