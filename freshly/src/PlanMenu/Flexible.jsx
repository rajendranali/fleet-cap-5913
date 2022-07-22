import React from 'react'
import {Box,Heading,Stack ,Text,Image,Button} from "@chakra-ui/react"
const Flexible = () => {
  return (
   <Box marginBottom="100px" style={{marginTop:"101px"}}>
    <Image marginLeft="45%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg"/>
    <Heading>Flexible plans that fit your life</Heading>
   
    <Text w="60%" marginLeft="20%">We offer anywhere from 4–12 meals per week, with meals as low as $8.99 each. The bigger your box, the more you’ll save—and you can always pause, cancel, or change your plan at any time.</Text>
   <Stack direction={['column', 'row']} gap="10px" w="95%" marginLeft="2.5%" marginTop="5%">
    <Box>
<img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg" alt="" />
<Heading size="30px">4-5 Meals</Heading>
    </Box>
    <Box>
        
        <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg" alt="" />
        <Heading size="30px">4-5 Meals</Heading>
    </Box>
    <Box>
        <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg" alt="" />
        <Heading size="30px">4-5 Meals</Heading>
    </Box>
    <Box>
        <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg" alt="" />
        <Heading size="30px">4-5 Meals</Heading>
    </Box>
    <Box>
        <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg" alt="" />
        <Heading size="30px">4-5 Meals</Heading>
    </Box>
   </Stack>
   <Button marginTop="50px"bg="blue" w="150px"h="50px"color="white" borderRadius="0px">Get Started</Button>
   </Box>
  )
}

export default Flexible