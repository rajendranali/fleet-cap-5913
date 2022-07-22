import React from 'react'
import {Box,Heading,Stack ,Text,Image,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"
const LifeStyle = () => {
    return (
        <Box marginBottom="100px" style={{marginTop:"101px"}}>
         <Image marginLeft="45%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg"/>
         <Heading>For Every Diet & Lifestyle</Heading>
        
         <Text w="60%" marginLeft="20%">We’re here to make every dish delicious and nutritious, with prepared meals that satisfy a wide range of tastes—all meticulously crafted to meet your dietary wants and needs.</Text>
        <Stack direction={['column', 'row']} gap="10px" w="95%" marginLeft="2.5%" marginTop="5%" size="200px">
         <Box>
     <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03-p-500.png" alt="" />
     <Heading size="30px">Purely Plant</Heading>
     <Text>Plant-based meals for everyone</Text>
     <Link to="">Learnmore</Link>
         </Box>
         <Box>
             
             <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05-p-500.png" alt="" />
             <Heading size="30px">Gluten Free</Heading>
             <Text>Plant-based meals for everyone</Text>
     <Link to="">Learnmore</Link>
         </Box>
         <Box>
             <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02-p-500.png" alt="" />
             <Heading size="30px">Dairy Free Meals</Heading>
             <Text>Plant-based meals for everyone</Text>
     <Link to="">Learnmore</Link>
         </Box>
         <Box>
             <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01-p-500.png" alt="" />
             <Heading size="30px">Carb-Smart</Heading>
             <Text>Plant-based meals for everyone</Text>
     <Link to="">Learnmore</Link>
         </Box>
         <Box>
             <img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04-p-500.png" alt="" />
             <Heading size="30px">Calorie-Conscious</Heading>
             <Text>Plant-based meals for everyone</Text>
     <Link to="">Learnmore</Link>
         </Box>
        </Stack>
        <Button marginTop="50px"bg="blue" w="150px"h="50px"color="white" borderRadius="0px">Get Started</Button>
        </Box>
       )
     }


export default LifeStyle