import React ,{useState,useContext}from 'react'
import {Box,Button,Text ,Input,Heading,Stack, useConst}from "@chakra-ui/react"
import {Link,useNavigate} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContext'
const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const {state,dispatch} = useContext(AuthContext)
  console.log(state)
  const handlechange = (e) => {  
      const{name,value}=e.target
      setFormState({...formState,[name]:value})
  }
   const handleSubmit = async(e) => {
    e.preventDefault()
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        
        alert("success");
        console.log(res.token);
       dispatch({type:"LOGIN_SUCCESS",token:res.token});
        navigate("/");
      })
      .catch((err) => {
       // console.log(err);
      });

   }
  return (
   <Box>
    <Heading marginBottom="50px">Log In</Heading>
    <form action="" onSubmit={handleSubmit}>
        <Input value={formState.email} onChange={handlechange} name="email"
        type="email"placeholder="enter the mail" w="400px" borderRadius="0px"/>
        <br />
        <br />
        <br />
        <Input value={formState.password} onChange={handlechange} name="password"type="password"placeholder="Enter your password" w="400px" borderRadius="0px"/>
        <br />
        <br />
        <Input type="submit"  w="400px" borderRadius="0px" bg="blue"color="white" value="Log In"/>
    </form>
    <Stack direction="columns" gap="100px" marginLeft="35%" marginTop="50px">
      <Text><a href="">Forgot password</a></Text>
      <Text>Don't Have account?<a href="">Get started</a></Text>
    </Stack>
   </Box>
  )
}

export default Login