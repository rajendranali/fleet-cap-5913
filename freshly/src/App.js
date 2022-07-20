
import './App.css';
import Navbar from './Navbar/Navbar';
import {ChakraProvider} from "@chakra-ui/react"

import Allroute from './Allroutes/Allroute';
import Balance from './BalanceMenu/Balance';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
     <Navbar/>
     <Allroute/>
     {/* <Balance/> */}
      </ChakraProvider>
      
    </div>
  );
}

export default App;
