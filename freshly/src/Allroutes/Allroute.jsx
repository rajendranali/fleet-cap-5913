import React from 'react'
import {Routes,Route} from "react-router-dom"
import Balance from '../BalanceMenu/Balance'
import Home from "../BalanceMenu/Home"
import PlanMenu from '../PlanMenu/PlanMenu'
const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<PlanMenu/>}/>
        <Route path="/" element=""/>
      </Routes>
    </div>
  )
}

export default Allroute