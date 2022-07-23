import React ,{useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import {Box,Button} from "@chakra-ui/react"
const User = () => {
    const {state,dispatch} = useContext(AuthContext)

  return (
    <div>
  
<Button onClick={()=>dispatch({type:"LOGOUT_SUCCESS"})}>Log out</Button>
    </div>
  )
}

export default User