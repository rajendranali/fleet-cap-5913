import React from 'react'
import {Routes,Route} from "react-router-dom"
import Balance from '../BalanceMenu/Balance'
import Home from "../BalanceMenu/Home"
import Login from '../Login/Login'
import PlanMenu from '../PlanMenu/PlanMenu'
import HowWork from "../HowWork/HowWork"
const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<PlanMenu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/work" element={<HowWork/>}/>
      </Routes>
    </div>
  )
}

export default Allroute