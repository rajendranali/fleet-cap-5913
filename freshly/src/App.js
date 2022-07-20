
import './App.css';

import {ChakraProvider} from "@chakra-ui/react"
import { Children } from 'react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
     {Children}
      </ChakraProvider>
      
    </div>
  );
}

export default App;
