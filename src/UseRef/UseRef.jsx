import React, { useRef ,useState} from 'react'

const UseRef = () => {
    //useRef is same like a useState and its quality is it no re-rendring the element or components
    let luckyname = useRef(null)
    const [value, setValue] = useState(false)
    let submitted =(e)=>{
        e.preventDefault()
        const data = luckyname.current.value
        data ===""? alert('fill the filled'): setValue(true)
        // setValue(true)

    }
  return (
    <div>
        <form action="" onSubmit={submitted}>
        <label htmlFor="luckyname">name</label>
        <br />
        <input type="text"id='luckyname'ref={luckyname}/>
        <br />

        <button>click here</button>
        </form>
        <h1>{value ?`show value of ${luckyname.current.value}`: ""}</h1>
    </div>
  )
}

export default UseRef