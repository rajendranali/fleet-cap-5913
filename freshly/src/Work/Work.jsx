import React from 'react'
import {Box,Stack,Text,Heading, Image} from "@chakra-ui/react"
const Work = () => {
  return (
   <Box>
    <Heading as="h3" size="2xl" marginTop="40px">How it works</Heading>
    <Stack direction={['column', 'row']} justifyContent="space-around" alignItems="center" marginTop="40px"> 
        <Box>
            <Image marginLeft="20px" src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg" alt="" />
            <Text fontSize="25px" fontWeight="bold" marginTop="20px" >Choose Your Meals</Text>
            <p>Rotating menu of 50+</p>
            <p>balanced dishes.</p>
        </Box>
        <Box>
        <Image marginLeft="20px" src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg" alt="" />
            <Text fontSize="25px" fontWeight="bold" marginTop="20px">Choose Your Meals</Text>
            <p>Fully-cooked meals</p>
            <p>sent fresh, not frozen.</p>
        </Box>
        <Box>
        <Image marginLeft="20px"src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg" alt="" />
            <Text fontSize="25px" fontWeight="bold" marginTop="20px">Choose Your Meals</Text>
            <p>Refrigerate meals &</p>
            <p>reheat in 3 minutes.</p>
        </Box>
        <Box >
        <Image marginLeft="20px" src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg" alt="" />
            <Text fontSize="25px" fontWeight="bold" marginTop="20px">Choose Your Meals</Text>
            <p>Change meals, skip a week,</p>
            <p>or cancel any time.</p>
        </Box>
    </Stack>
   </Box>
  )
}

export default Work