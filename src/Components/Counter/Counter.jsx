import React from 'react'
import { useState } from 'react'

const Counter = () => {
const [counter, setCounter] = useState(0)
const increase = () =>{
    setCounter(counter => counter + 1);
}
    const decrease = () => { 
        if (counter > 0) {
            setCounter((counter) => counter - 1);

        }
    }
  return (
    <div className='counter'>
          <h4>{counter}</h4>  
          <div className="flex">
              <button onClick={increase}>Increase</button>
              <button onClick={decrease}>Decrease</button>
          </div>
    </div>
  )
}

export default Counter