import logo from './logo.svg';
import './App.css';
import {Box} from '@chakra-ui/react'
import Header from './components/header';
import Search from './components/search';
function App() {
  return (
    <Box maxW={'1540px'} className="App">
      <Header />
      <Search />
    </Box>
  );
}

export default App;
