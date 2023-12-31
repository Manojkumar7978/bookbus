import React, { useContext, useState } from 'react'
import {Box,Input,Button} from '@chakra-ui/react'
import axios from 'axios'
import { myContext } from './context'

async function fetchBus(input){
    try {
        let res=await axios.post(`https://rightpayonline.com/bus/getAvailableServices`,input)
        console.log(res)
        return res.data
    } catch (error) {
        return error
    }
}

export default function Search() {
    let[input,setinput]=useState({
        sourceId:null,
        destinationId:null,
        doj:null
    })
    let {setbusList,busList}=useContext(myContext)

    function handelSearch(){
      setbusList('loder')
        fetchBus(input)
        .then((res)=>{
            if(res.status==='success'){
              setbusList([...res.services])
            }else if(res.status==='fail'){
              setbusList(res.message)
            }else{
              setbusList('Please Enter Correct Details')
            }
        })
        .catch((err)=>{
            return err
        })
    }
  return (
    <Box>
        <Box display={'flex'}
        flexWrap={'wrap'}
    gap={10}
    m={[5,10,10]}
    justifyContent={'center'}
    alignItems={'center'}
    border={'1px solid gray'}
    borderRadius={5}
    p={5}
    >
      <Input 
      w={'200px'}
      onChange={(e)=>{
        setinput({
            ...input,
            sourceId:e.target.value
        })
      }} type='number' placeholder='From'/>
      <Input  w={'200px'} onChange={(e)=>{
        setinput({
            ...input,
            destinationId:e.target.value
        })
      }} type='number' placeholder='To'/>
      <Input w={'200px'} onChange={(e)=>{
        setinput({
            ...input,
            doj:e.target.value
        })
      }} type='date'/>
       <Button 
   colorScheme='blue'
   fontSize={'xx-large'}
   borderRadius={50}
   p={7}
   onClick={()=>{
    handelSearch()
   }}
    >Search</Button>

    </Box>
   
    </Box>
  )
}
