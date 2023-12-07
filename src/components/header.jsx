import React from 'react'
import { chakra,IconButton ,Text,
Stack,Box
} from '@chakra-ui/react'
import { FaBusAlt } from "react-icons/fa";

export default function Header() {
  return (
    <chakra.div  p={5} boxShadow={'lg'}>
       <Box spacing={3} display={'flex'} alignItems={'center'}>
       <IconButton w={10}>
            <FaBusAlt  color='red' size={30}/>
        </IconButton>
        <Text fontSize={'xx-large'} color={'black'}>bookBus</Text>
       </Box>
      
    </chakra.div>
  )
}
