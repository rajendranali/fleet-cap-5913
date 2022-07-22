import React ,{useState,useRef}from 'react';
import styles from "./plan.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,Box,Image,
    useDisclosure,Button,RadioGroup,Stack,Radio
  } from '@chakra-ui/react'
const ModalDiv=({data})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] =useState('inside')
  
    const btnRef = useRef(null)
    return (
      <>
       
  
        <Button mt={3} ref={btnRef} onClick={onOpen} w="360px" h="320px" bg="white">
        <Box>
        <img src={data.img} alt=""  className={styles.disc}/>
         <Text>{data.title}</Text>
         <Stack direction={['column', 'row']} color="green">
          <Text>
            {data.energy} |
          </Text>
          <Text>
            {data.gluteen} |
          </Text>
          <Text>
            Free Service
          </Text>

         </Stack>
        </Box>
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody size="400px">
          <Stack direction="columns" gap="20px">
            <Button bg="skyblue" color="white">{data.soy}</Button>
            <Button  bg="skyblue" color="white">{data.protien}</Button>
          </Stack>
          <Stack direction="columns">
            <Box margin="20px">
            <Image w="500px" h="200px" borderRadius="16px"src={data.img}/>
            </Box>
            <Box marginLeft="20px">
              <Text>{data.sub_title}</Text>
            </Box>
          </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalDiv 