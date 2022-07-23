import React from 'react'
import {Box,Heading,Stack ,Text,Image,Button,Input}from "@chakra-ui/react"
import styles from "./signup.module.css"
const SignUp = () => {
  return (
    <Box className={styles.signUp}>
       <Box className={styles.container}>
       <Heading>
        Dinner’s ready!
        </Heading>
        <Heading fontSize="30px">Chef-prepared, healthy meals delivered weekly</Heading>
       <Stack direction="columns" gap="50px" marginTop="10%" >
       <Input  className={styles.input}type="email" placeholder='rajendra@gmail.com' bg="white" w="700px" marginLeft="50px"opacity="2" border="2px solid blue"/>
        <Input type="text" placeholder="ZIP" bg="white" w="400px" />
        <Input type="submit" value="Continue"  bg="blue" w="200px" color="white"/>
       </Stack>
       </Box>

    </Box>
  )
}

export default SignUp