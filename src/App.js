import logo from './logo.svg';
import './App.css';
import {Box, Stack} from '@chakra-ui/react'
import Header from './components/header';
import Search from './components/search';
import Buslist from './components/buslist';
function App() {
  return (
    <Box maxW={'1540px'} className="App" m={'auto'}>
      <Header />
      <Search />
      <Stack bg={'gray.200'}>
      <Buslist/>
      </Stack>
    </Box>
  );
}

export default App;
