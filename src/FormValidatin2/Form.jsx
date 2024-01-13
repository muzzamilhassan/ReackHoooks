import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alldata,setAlldata]=useState([])
    const submitted =(e)=>{
        e.preventDefault()
        if(email&& password){

            const newdata = {id:new Date().getTime().toString(),email,password}
            setAlldata([...alldata,newdata])
            // console.log(alldata);
            setEmail('')
            setPassword('')
        }
        else{
            alert('Fill All data')
        }
    }
    useEffect(()=>{
        document.title= `form.js`
    },[])
  return (
    <div>
        <div className="log">
            <form action="" onSubmit={submitted}>
            <div>
                <input type="email" name="email" id="email"value={email}    onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
            </div>
            <div>
                <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button>click here</button>
            </form>
            <div>
                {
                    alldata.map((e)=>{
                        return(
                        <p key={e.id}>{`person email : ${e.email} person password: ${e.password}`}</p>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Form