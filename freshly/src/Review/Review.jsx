import React,{useEffect,useState} from 'react'
//mport {review} from"./review"
import {AiFillStar}from "react-icons/ai"
import {Box,Heading,Stack,Text,Button} from "@chakra-ui/react"
import styles from "./review.module.css"
import {FaLessThan,FaGreaterThan} from "react-icons/fa"

import axios from 'axios'
const Review = () => {
  const [review,setReview]=useState([])
  const[page,setPage]=useState(1)
  useEffect(()=>{
    axios.get(`http://localhost:8080/review?_page=${page}&_limit=3`).then((r)=>setReview(r.data))
  },[page])
  console.log(page)
  return (
   <Box className={styles.box}>
   <Button onClick={()=>setPage(page-1)}disabled={page==1}><FaLessThan/></Button>
    {review.map((data)=>
    <Box className={styles.review} key={data.id}>
       
        <Stack direction={['column', 'row']} alignItems="center">
        < AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
            <AiFillStar className={styles.star}/>
       
        </Stack>
        <Box marginTop="30px">
          <Heading as="h5" size="1xl" marginBottom="20px">{data.title}</Heading>
        <Text>{data.says}</Text>
        <Text>{data.name}</Text>
        </Box>
       
    </Box>)}
    <Button onClick={()=>setPage(page+1)} marginLeft="60px" disabled={review.length==page}><FaGreaterThan/></Button>
   </Box>
  )
}

export default Review