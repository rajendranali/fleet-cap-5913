import React from 'react'
import {Box,Button,Text ,Input,Heading,Stack}from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Login = () => {
   
  return (
   <Box>
    <Heading marginBottom="50px">Log In</Heading>
    <form action="">
        <Input type="email"placeholder="enter the mail" w="400px" borderRadius="0px"/>
        <br />
        <br />
        <br />
        <Input type="password"placeholder="Enter your password" w="400px" borderRadius="0px"/>
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