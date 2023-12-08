import React, { useContext } from 'react'
import {Box, Text} from '@chakra-ui/react'
import { myContext } from './context'
import Failedui from './failedui'
import Buscard from './buscard'


export default function Buslist() {
  let{busList}=useContext(myContext)
  return (
    <Box display={busList===null && 'none'}>
      
     {
      Array.isArray(busList) ? 
      <Box bg={'gray.200'} w={'100%'} p={[5,10,20]}>
      {
        busList.map((el,ind)=>{
          return <>
          <Buscard el={el}/>
          </>
        })
      }

  </Box>
  :
  <Failedui/> 
     }
    </Box>
  )
}
