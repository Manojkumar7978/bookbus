import React, { useContext } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { myContext } from './context'
import Failedui from './failedui'
import Buscard from './buscard'
import Loder from './loder'


export default function Buslist() {
  let { busList } = useContext(myContext)

  return (
    <Box bg={'gray.200'} w={'100%'} p={5} display={busList === null && 'none'}>

      {
        Array.isArray(busList) ?
        // sucess fetching data from api 
          <>
            {
              busList.map((el, ind) => {
                return <>
                  <Buscard key={el.Service_key} el={el} />
                </>
              })
            }

          </>
          :
// failed search or loding inicator
          busList === 'loder' ? <Loder /> : <Failedui />

      }
    </Box>
  )
}
