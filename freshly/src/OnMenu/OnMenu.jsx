import React from 'react'
import {Box,Image,Heading,Text,Button} from "@chakra-ui/react"
import styles from "./menu.module.css"
import {Data} from "./data"
import { SimpleGrid } from '@chakra-ui/react'
const OnMenu = () => {
  return (
    <Box className={styles.onmenu}>
<Box className={styles.grid}>
  <Heading>On the menu</Heading>
   <Text>Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</Text>
 <SimpleGrid minChildWidth='200px' spacing='40px' justifyContent="space-around" className={styles.container1} marginTop="50px">
   {Data.map((data)=>
   <Box className={styles.div}>
    <img src={data.img} w="250px" h="190px" alt=""/>
    <h4>{data.title}</h4>
    <p>{data.energy}</p>
    <p>{data.free}</p>
    <p>{data.service}</p>
   </Box>)}
   </SimpleGrid>
   <Button w="700px" marginTop="70px" h="50px"bg="blue" color="white" className={styles.btn}>View Plan & Menu</Button>
</Box>
    </Box>
  )
}

export default OnMenu