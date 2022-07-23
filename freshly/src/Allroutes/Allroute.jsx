import React from 'react'
import {Routes,Route} from "react-router-dom"
import Balance from '../BalanceMenu/Balance'
import Home from "../BalanceMenu/Home"
import Login from '../Login/Login'
import PlanMenu from '../PlanMenu/PlanMenu'
import HowWork from "../HowWork/HowWork"
import SignUp from '../Signup/SignUp'
const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<PlanMenu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/work" element={<HowWork/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default Allroute