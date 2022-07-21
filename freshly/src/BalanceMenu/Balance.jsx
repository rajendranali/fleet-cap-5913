import React from 'react'
import {Box,Stack,Flex,Button,Text,Image,Input} from "@chakra-ui/react"
import styles  from "./balance.module.css"
import Work from "../Work/Work"
import OnMenu from '../OnMenu/OnMenu'
const Balance = () => {
  return (
    <Box>
        <Stack direction={['column', 'row']} spacing  ="0px">
            <Box className={styles.balanceMenu}>
               <img src="" alt="" />
               <Text className={styles.text} marginTop="60%">Delivered to you</Text>
               <Text className={styles.text}> fresh, not frozen.</Text>
            </Box>
            <Box className={styles.delivery}>
            <Text fontSize="65px" fontWeight="bold"  marginTop="20px">Balanced meals</Text>
            <Text fontSize="65px" fontWeight="bold">for busy lives.</Text>
            <Button className={styles.explore}>Explore Meals</Button>
            <Text marginRight="30%" fontWeight="bold" fontSize="20px">See meals available in your area!</Text>
            <Stack direction={["column", "row"]}  marginTop="30px" gap="20px">
              <Box marginLeft="45px">
              <Text fontWeight="bold" marginRight="100px"  >Email Address</Text>
            <Input marginLeft="10px" type="email"  borderRadius="0px" backgroundColor="white" marginTop="10px" placeholder='rajendra@gmail.com'/>
           
              </Box>
              <Box>
              <Text fontWeight="bold" marginRight="140px" >ZIP Code</Text>
            <Input type="number"   borderRadius="0px"backgroundColor="white" marginTop="10px" placeholder='145985'/>
                
              </Box>
              
            </Stack>
            <Button className={styles.getstart}>Get Started</Button> 
            </Box>
        </Stack>
        <Work/>
        <OnMenu/>
    </Box>
  )
}

export default Balance