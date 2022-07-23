import React from 'react'
import {Box,Heading,Text,Stack,Image,Button,SimpleGrid}from "@chakra-ui/react"
import styles from "./how.module.css"
const HowWork = () => {
  return (
    <Box>
        <Heading>About Freshly</Heading>
        <Heading fontSize="30px">Heat-and-eat in 3 minutes or less</Heading>
        <Text>See just how easy it is to prepare a chef-cooked Freshly meal</Text>
  <Box w="600px" marginLeft="30%" h="400px" marginTop="50px">
    <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/llltuzvd35" width="100%" height="225"></iframe></Box>
       
    <Box>
        <Heading>Our Food Philosophy</Heading>
        <Text>Our meals aren’t just ready in minutes... or just delicious... or just nutritious. They’re all three.</Text>
        <Stack direction={['column', 'row']} align="center" justifyContent="space-around" marginTop="50px">
   <Box >
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f0020df16335dbda1b6_gp-less-sugar-nocopy%402x.png" w="150px"marginLeft="20px"/>
    <Heading>Less sugar</Heading>
    <p>Sweet, naturally</p>
   </Box>
   <Box>
   <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00f6ed944c5e2f02a3_gp-less-processed-nocopy%402x.png" w="150px"marginLeft="20px"/>
   <Heading>Less processed</Heading>
    <p>Sweet, naturally</p>
   </Box>
   <Box>
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00a02e38947ec7759a_gp-more-nutrients-nocopy%402x.png" w="150px"marginLeft="20px"/>
    <Heading>More nutrients</Heading>
    <p>Sweet, naturally</p>
   </Box>
        </Stack>
        <Button bg="blue"w="150px" h="50px" marginTop="30px" color="white" borderRadius="0px">Get Started</Button>
    </Box>
    <SimpleGrid minChildWidth="500px" column={2} spacing={10} justifyContent="space-around" marginTop="100px">
  <Box  marginLeft="38%">
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg" alt="" w="400px" />
  </Box>
  <Box marginRight="35%"  textAlign="left" >
    <Heading>Delicious Gluten-Free Options</Heading>
    <Text>Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste.</Text>
  </Box>
  <Box  marginLeft="38%" >
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296de1383751f4bef12c_22_About_SmartNutrition_448x278.jpg" alt="" w="400px" />
  </Box>
  <Box marginRight="35%" textAlign="left">
  <Heading >Delicious Gluten-Free Options</Heading>
    <Text>Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste.</Text>
  </Box>
  <Box  marginLeft="38%" >
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6155ec8c50610d16a9df5045_Purely_Plant_Unwrapped_Burrito%20(1).jpg" alt=""  w="400px"/>
  </Box>
  <Box marginRight="35%"  textAlign="left"><Heading>Delicious Gluten-Free Options</Heading>
    <Text>Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste.</Text></Box>
</SimpleGrid>
<Box className={styles.bg}>
  <Button className={styles.btn}>See our plan & Menu</Button>
</Box>
<Stack direction={["column","row"]} gap="20px" marginLeft="20%" marginTop="100px">
  <Box>
    <Image w="300px"src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/5d7ffdc4d863541cac775fa4_Heat%20your%20meal-p-500.png" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to heat freshly meals</Heading>
  </Box>
  <Box>
    <Image  w="300px" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/5d7ffdd9129cb7bc164454ed_ChangeMeals-p-500.png" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to chamge your freshly meals</Heading>
  </Box>
  <Box>
    <Image  w="300px"src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/5d7ffdb9d863542ac9775f5a_Recycle%20our%20packaging-p-500.png" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to heat freshly meals</Heading>
  </Box>
</Stack>
<Button className={styles.btn1}>learn more</Button>
<SimpleGrid minChildWidth="500px" column={2} spacing={10} justifyContent="space-around" marginTop="100px">
  <Box  marginLeft="38%">
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f129696f38a1cf4b505a42_22_About_OfficialFreshlyApp_448x278.jpg" alt="" w="400px" />
  </Box>
  <Box marginRight="35%"  textAlign="left" >
    <Heading>The Official Freshly App</Heading>
    <Text>Our app makes it easy to choose your meals, track deliveries, and chat with us 24/7</Text>
  </Box>
  <Box  marginLeft="38%" >
    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296bc7759e4ab7ad7e82_22_About_ManageDietaryPreferences_448x278.jpg" alt="" w="400px" />
  </Box>
  <Box marginRight="35%" textAlign="left">
  <Heading >Manage your dietary preferences</Heading>
    <Text>Dairy-Free? Gluten-Free? Soy-Free? No problem. With Freshly, you’re always in control.</Text>
  </Box>
 
</SimpleGrid>
<Box marginTop="100px">
  <Heading>Why Choose Freshly?</Heading>
  <Text w="60%"marginLeft="20%">When it comes to meal-time, you’ve got a lot of options. Some offer convenience, some offer nutrition, and some offer the foods you crave. We offer all three.</Text>
<Stack direction={["column","row"]} gap="20px" marginLeft="20%" marginTop="100px">
  <Box>
    <Image w="300px"src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e0e09c16d7ce05133094_22_BetterThanMealKit_LP_Hero_1440x800.jpg" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to heat freshly meals</Heading>
  </Box>
  <Box>
    <Image  w="300px" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e10f43743f2052a4a036_22_BetterThanCooking_LP_Hero_1440x800.jpg" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to chamge your freshly meals</Heading>
  </Box>
  <Box>
    <Image  w="300px"src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e142a8c3d3cd7a364af1_22_LeaveTakeoutLP_Hero_1440x800.jpg" alt="" />
    <Heading fontSize="20px" marginTop="20px">How to heat freshly meals</Heading>
  </Box>
</Stack>
<Button className={styles.btn1}>learn more</Button>
</Box>
    </Box>
  )
}

export default HowWork