import React from 'react'
import {Routes,Route} from "react-router-dom"
import Balance from '../BalanceMenu/Balance'
const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Balance/>}/>
        {/* <Route path="/" element=""/>
        <Route path="/" element=""/> */}
      </Routes>
    </div>
  )
}

export default Allroute