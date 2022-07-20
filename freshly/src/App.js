
import './App.css';
import Navbar from './Navbar/Navbar';
import {ChakraProvider} from "@chakra-ui/react"
import { Children } from 'react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
     <Navbar/>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
