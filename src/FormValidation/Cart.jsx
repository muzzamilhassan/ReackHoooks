import React from 'react'
import './Cart.css'
import { useState } from 'react'
const Cart = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allentery, setAllentery] = useState([])

  const submitted= (e)=>{
    e.preventDefault();
    if(email&&password){
      
      const newdata = {id:new Date().getTime().toString(), email:email,password:password}// id is the unique key for map function 
      setAllentery([...allentery,newdata])// this rest will be show us our previs data also and newdata also
      setEmail('')//this is used for when we submit form so input form will clear 
      setPassword('')
    }else{
      alert('Enter Correct Data')
    }
  }
  return (
    <div>
        <div>
        <form onSubmit={submitted}>
   <div className="user-box">
     <input type="email" name='email' required="" value={email} onChange={e=>setEmail(e.target.value)}/>
     <label>Username</label>
   </div>
   <div className="user-box">
     <input type="password" name="password" required="" value={password} onChange={e=>setPassword(e.target.value)}/>
     <label>Password</label>
   </div>
   <center><button>send</button>
  </center>
 </form>
 </div>
<h1>
  {
    allentery.map((e)=>{
      return(
        <div key={e.id}>
          <h1 style={{fontSize:'20px'}}>{`emial: ${e.email} password: ${e.password}`}</h1>
        </div>
      )
    })
  }
</h1>

    </div>
  )
}

export default Cart