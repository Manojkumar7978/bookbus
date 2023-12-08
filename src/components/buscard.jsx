import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel,
     Box, Button, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from 'axios';
import LowerDeck from './lowerDeck';
import Loder from './loder';
import UpperDeck from './upperDeck';

async function fetchSeatData(data){
    try {
        let res=await axios.post(`https://rightpayonline.com/bus/getSeatingLayout`,data)
        return res.data
    } catch (error) {
        return error
    }
}

export default function Buscard({ el }) {
    const traveltime = `${el.TravelTime.split(':')[0]}hrs ${el.TravelTime.split(':')[1]}mins`
    let [showAccordian,setAcc]=useState(true)
    let [seatDetails,setSeatDetails]=useState(null)
    let [info, setinfo] = useState({
        sourceId: el.Source_ID,
        destinationId: el.Destination_ID,
        doj: el.jdate,
        serviceId: el.Service_key,
        operatorId: el.operatorId,
        layoutId: el.layout_id,
        seatFare: el.Fare,
        isSingleLady: el.isSingleLady,
        concessionId: 0
    }) //bus information to fetch seat details

    const handelClick=()=>{
        if(showAccordian){
            fetchSeatData(info)
        .then((res)=>{
            setSeatDetails({...res.seatlayout})
        })
        setAcc(false)
        }else{
            setAcc(true)
        }
    }
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <Box mb={0} mt={5} bg={'white'}
                    p={5}
                    borderRadius={10}
                    _hover={{ border: '0.5px solid blue' }}
                >
                    <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
                        <Stack w={'30%'} spacing={2}>
                            <Heading size={'md'} noOfLines={2}
                                maxW={'300px'}>{el.Traveler_Agent_Name}</Heading>
                            <Text noOfLines={2} color={'gray.700'}>{el.Bus_Type_Name}</Text>
                        </Stack>
                        <Flex flexDirection={['column', 'column', 'row']}
                            gap={[0, 0, 5]}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Text fontWeight={'500'} fontSize={'large'}>{el.Start_time}</Text>
                            <Text display={['none', 'none', 'block']} color={'gray'}>|</Text>
                            <Text fontWeight={'400'} color={'gray'} fontSize={'large'}>{traveltime}</Text>
                            <Text display={['none', 'none', 'block']} color={'gray'}>|</Text>
                            <Text fontWeight={'500'} fontSize={'large'}>{el.Arr_Time}</Text>
                        </Flex>
                        <Heading size={'md'} textAlign={'right'} w={'30%'}>{`₹ ${el.Fare}`}</Heading>
                    </Flex>
                    <Text color={'gray.500'} textAlign={'right'}>Available seats {el.available_seats}</Text>
                    <Divider mt={2} mb={2} />
                    <Flex justifyContent={'right'}>
                        <AccordionButton
                        onClick={()=>{
                            handelClick()
                        }}
                            as={Button}
                            maxW={'150px'}
                            _hover={{}}
                            _active={{}}
                            colorScheme='blue'
                            m={3}
                            borderRadius={10}
                            fontSize={'x-large'}
                        >
                            Select Seats
                        </AccordionButton>
                    </Flex>
                    <AccordionPanel m={0} bg={'white'}>
                        <Divider mb={5} />
                        {
                            seatDetails===null ? <><Loder/></>
                            :
                            seatDetails.TotalSeatList.lowerdeck_seat_nos==undefined ?
                            <Text color={'red'} textAlign={'center'}>Something went wrong</Text> :
                            <Box rowGap={5} display={'flex'} flexDir={['column','column','row']} justifyContent={'space-around'}>
                            <LowerDeck seats={seatDetails.TotalSeatList.lowerdeck_seat_nos || null}/>
                            <UpperDeck seats={seatDetails.TotalSeatList.upperdeck_seat_nos || null}/>
                            </Box>
                        }
                    </AccordionPanel>
                </Box>

            </AccordionItem>
        </Accordion>

    )
}
