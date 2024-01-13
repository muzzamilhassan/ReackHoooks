import React, { useEffect } from 'react'
import { useState } from 'react'
const UseEffect2 = () => {
    const [count, setCount] = useState(window.screen.width)
    const screensize=()=>{
        setCount(window.innerWidth)
        console.log(window.innerWidth);
    }
    useEffect(()=>{window.addEventListener('resize',screensize)
    return()=>{
        window.removeEventListener('resize',screensize)
    }
    })
    // useEffect(() => {
    //   <code></code>
    
    //   return () => {
    //     cleanup
    //   }
    // }, [dependency])
    
  return (
    <div>
        <h1>size of the screen</h1>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect2