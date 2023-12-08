# bookBus (Bus Booking Application)

## Description
- Here a user can search for a bus by destination id , sourceId and date of journy. And see available seats for respective buses.

## Features
- Search for bus
![Searching](../bookbus/src/assests/searching.PNG)
- See seat details for buses
![Bus list](../bookbus/src/assests/buslisting.PNG)
![Seat Details](../bookbus/src/assests/seats.PNG)
![mobile view](../bookbus/src/assests/mobile%20view.jpg)



## Deployed link
- https://bookbus-22cl80tm3-manojkumar7978.vercel.app/

## tech Stack
- HTML
- CSS
- JS
- React
- Chakra UI
- Axios(fetching data)

## Api 
1. For fetching buses
- https://rightpayonline.com/bus/getAvailableServices
- sample request:
{
"sourceId": "3",
"destinationId": "5",
"doj": "2023-12-30"
}
2. For fetching seat details
- https://rightpayonline.com/bus/getSeatingLayout
- sample request:
{
"sourceId": "3",
"destinationId": "5",
"doj": "2023-12-30",
"serviceId": "1769344333",
"operatorId": "115551",
"layoutId": "0",
"seatFare": 1666,
"isSingleLady": 0,
"concessionId": 0
}

## Get Started
- git clone https://github.com/Manojkumar7978/bookbus.git
- cd bookbus
- npm i
- npm start
