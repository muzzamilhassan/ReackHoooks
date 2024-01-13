import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
const UseEffect1 = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
      // alert('firsttime')
        if(count>=1){
          document.title = `chats(${count})`
        }else{
          document.title = `chats`
        }
      },[count])
 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={(()=>{
            setCount(count+1)
        })}>click</button>
        <button><Link to='form'>clickmeeee</Link></button>
    </div>
  )
}

export default UseEffect1