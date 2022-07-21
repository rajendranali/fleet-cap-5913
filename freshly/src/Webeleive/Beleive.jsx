import React from 'react'
import {Box,Image,Heading,Text,Button,Input} from "@chakra-ui/react"
import styles from "./beleive.module.css"
const Beleive = () => {
  return (
    <>
    <Box className={styles.beleive}>
        <Box className={styles.box1}>
           <Heading textAlign="left" marginTop="50px">We believe eating right should be easy for everyone.</Heading>
           <Text textAlign="left" w="95%" fontSize="20px">Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</Text>
           <Button marginRight="800px" marginTop="80px" w="150px" h="50px" bg="blue"color="white" borderRadius="0px">Learn More</Button>
        </Box>
        <Box w="60%">
         <Image  w="100%"src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1275059fd961964f53287_22_Homepage_EatingBetterEasy_BG_866x708.jpg"/>
        </Box>
        
        
    </Box>
    <Box className={styles.beleive} marginTop="120px">
    <Box w="60%">
         <Image  w="100%"src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1274f0c096f517bb89ed5_22_Homepage_HealthyMealsDelivered_866x708.jpg"/>
        </Box>
        <Box className={styles.box2}>
           <Heading textAlign="left" marginTop="50px">Healthy Meals Delivered Weekly</Heading>
          <Input type="email" placeholder='rajendra@gmail.com'  marginTop="50px"/>
          <br/>
          <br />
          <Input type="text" placeholder='ZIP'/>
           <Button marginRight="800px" marginTop="80px" w="400px" h="50px" bg="blue"color="white" borderRadius="0px">Get Started</Button>
        </Box>
       
        
        
    </Box>
    
    </>
  )
}

export default Beleive