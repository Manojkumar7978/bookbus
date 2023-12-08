import { Box, Divider, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";
import { MdAirlineSeatFlat } from "react-icons/md";

function UpperDeck({seats}) {
    let rowOne=[]
    let rowTwo=[]
    let rowThree=[]
    let rowFour=[]
    let rowFive=[]
    let rowSix=[]
    let rowSeven=[]
    let otherRow=[]
    const setRow=()=>{
        seats.map((el,ind)=>{
            let seat=el.split(', ')
            if(seat[1]==1){
                rowOne.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==2){
                rowTwo.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==3){
                rowThree.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==4){
                rowFour.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==5){
                rowFive.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==6){
                rowSix.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else if(seat[1]==7){
                rowSeven.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }else{
                otherRow.push({
                    breath:seat[3],
                    seatNo:seat[0],
                    fare:seat[6]
                })
            }

        })
    }
    setRow()

  return (
    <Box w={['100%','100%','45%']}>
    <Text textAlign={'center'} color={'gray.700'}>Upper Breath</Text>
    <Box  h={'250px'}  border={'1px solid red'} borderRadius={10} p={5} display={'flex'} gap={2}>
       <Box w={'full'} display={'flex'}  gap={5} flexDirection={'column'} justifyContent={'space-around'} >
       <Box display={rowOne.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowOne.map((el,ind)=>{
                    return <Box>
                        <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                        <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                    </Box>
                })
            }
        </Box>
        <Box display={rowTwo.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowTwo.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={rowThree.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowThree.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={rowFour.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowFour.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={rowFive.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowFive.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={rowSix.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowSix.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={rowSeven.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                rowSeven.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
        <Box display={otherRow.length>0 ? 'flex' : 'none'} justifyContent={'space-between'} flexDir={'row-reverse'} >
            {
                otherRow.map((el,ind)=>{
                    return <Box>
                    <Box boxShadow={'md'} p={1} bg={'blue.100'} display={el.breath=='UB' && 'none'} borderRadius={5}><MdAirlineSeatFlat color="tomato" size={25} /></Box>
                    <Box  boxShadow={'md'} p={1} bg={'blue.100'} borderRadius={5} display={el.breath=='SS' && 'none'}><MdEventSeat  color="tomato" size={25} /></Box>
                </Box>
                })
            }
        </Box>
       
       </Box>
    
    </Box>
    </Box>
  );
}

export default UpperDeck;
