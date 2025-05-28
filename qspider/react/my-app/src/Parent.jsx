import React from 'react'
import Child1 from './Child1'

function Parent() {
    let str ='welcome to qspider';
    let obj ={
        id:445,
        name:"vikash sharma",
        arr:[4545,4546]
    }
    
  return (
    <div>
        <Child1 data={{
            str,
            obj
        }
        }/>
      
    </div>
  )
}

export default Parent
