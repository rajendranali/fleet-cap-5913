import { Box ,Stack,Image,Text,Heading} from '@chakra-ui/react'
import {AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillApple} from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import {IoMdAppstore} from "react-icons/io"
import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <Box>
        <Stack direction={['column', 'row']} justifyContent="space-around" alignItems="center">
            <Box>
                <Image w="180px"  src="data:image/png;base64,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"/>
               <Text>@freshly.com</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold" marginTop="40px">Company</Text>
              <ul style={{listStyleType:"none",justifyContent:"justify",textAlign:"left"}}>
                <li>Career</li>
                <li>Contact</li>
                <li>Press</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Affiliate</li>
                <li>Partenship</li>

              </ul>
            </Box>
            <Box>
            <Text fontSize="20px" fontWeight="bold" marginTop="40px">Learn More</Text>
              <ul style={{listStyleType:"none",justifyContent:"justify",textAlign:"left"}}>
                <li>Plan & Menu</li>
                <li>FAQ</li>
                <li>Why Freshly</li>
                <li>Gift</li>
                <li>Blogs</li>
                <li>Students</li>
               

              </ul>
            </Box>
            <Box>
            <Text fontSize="20px" fontWeight="bold" marginTop="40px">Join Us</Text>
            <Stack direction={["left", "right"]} gap="10px" fontSize="20px" marginTop="20px" >
                <AiFillFacebook/>
                <AiOutlineInstagram/>
                <AiOutlineTwitter/>
                <FaPinterest/>
            </Stack>
           <div className={styles.appstore}>
            <div>
               <AiFillApple className={styles.apple}/>
            </div>
            <div>
                <p style={{color:"white",fontSize:"9.5px",marginLeft:"10px"}}>Download on the</p>
                <h4 style={{color:"white",marginLeft:"10px",fontWeight:"bold",fontSize:"16px"}}>App Store</h4>
            </div>

           </div>
           <div className={styles.appstore}>
            <div>
               <IoMdAppstore className={styles.apple}/>
            </div>
            <div>
                <p style={{color:"white",fontSize:"9.5px",marginLeft:"10px"}}>Download on the</p>
                <h4 style={{color:"white",marginLeft:"10px",fontWeight:"bold",fontSize:"16px"}}>Google Play</h4>
            </div>

           </div>
              
            </Box>
        </Stack>
    </Box>
  )
}

export default Footer