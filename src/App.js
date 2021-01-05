import React from 'react';
import {Switch, Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from './models/home'

function App() {
  return (
    <ChakraProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </ChakraProvider>      
  );
}

export default App;
