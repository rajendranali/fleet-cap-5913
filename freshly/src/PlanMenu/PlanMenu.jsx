import React ,{useState,useEffect}from 'react'
import {data} from "./data"
import {Box,Heading,SimpleGrid,Text} from "@chakra-ui/react"
import ModalDiv from './ModalDiv'
import Flexible from './Flexible'
import LifeStyle from './LifeStyle'
const PlanMenu = () => {
  const[inputdata,setInputData]=useState()
  const[updateData,setUpdateData]=useState([])
useEffect(() =>{
 
   
    let update=data.filter((data,i)=>{
    return data.category==inputdata
     
    })
    if(inputdata==""){
      setUpdateData(data)
    }
    else{
      setUpdateData(update)
    }
     
},[inputdata])
const handleChange = (e) => {
  e.preventDefault()
  setInputData(e.target.value)
}
 
  return (
    <>
    <Flexible/>
   <Box w="95%" alignItems="center" marginLeft="2.5%">
    <Heading>On the Menu</Heading>
    <Text w="70%" marginLeft="15%" marginTop="2rem">Whatever your lifestyle, Freshly’s got you covered—with gluten-free, dairy-free, plant-based, carb-smart, and calorie-conscious meal options! Our heat-&-eat breakfasts, low-lift lunches, and done-for-you dinners provide an effortless alternative to everyday cooking, with nutritious prepared meals delivered fresh to your door. Explore this week’s dishes and start eating better:</Text>
  <div style={{display: 'flex',gap:"20px",marginLeft:"40%" ,marginTop:"50px"}}>
  <p style={{color:"gray"}}>Menu category</p>
   <select name="" id="" onChange={handleChange} style={{color:"gray"}} defaultValue="">
  <option value="">All meals</option>
    <option value="signature">Signature Collection</option>
    <option value="pureplants">pure Plants</option>
    <option value="freshly">FreshlyFit</option>
    <option value="protien">Protien &sides</option>
   </select>
  </div>
   <SimpleGrid  minChildWidth='300px'  spacing='40px' justifyContent="space-around" marginTop="100px" >
{
  updateData.map((data)=><ModalDiv data={data} key={data.id}/>)
}
   </SimpleGrid>
   </Box>
   <LifeStyle/>
   </>
  )
 
}

export default PlanMenu