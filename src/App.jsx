import React from 'react'
import Form from './FormValidatin2/Form'
import UseEffect1 from './UseEffect/UseEffect1'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import UseEffect2 from './UseEffect/UseEffect2'
import Github from './ApiUsingUseEffect/Github'
import UseRef from './UseRef/UseRef'
// import Form from './FormValidatin2/Form'
const App = () => {
  return (

      <BrowserRouter>
      {/* <Form/> */}
      {/* <UseEffect2/> */}
      {/* <Github/> */}
      <UseRef/>
      {/* <Routes>
      <Route path='/' element={<UseEffect1/>}/>
      <Route path='/form' element={<Form/>}/>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App