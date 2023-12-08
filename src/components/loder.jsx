import React from 'react'
import { Box, Skeleton, Stack } from "@chakra-ui/react";

function Loder() {
    let i=[1,2,3,4,5]
  return (
    <Box display={'grid'} gap={5}>
    {
        i.map((el,ind)=>{
            return  <Stack key={ind} w={'70%'} m={'auto'}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        })
    }
    </Box>
  );
}

export default Loder;
