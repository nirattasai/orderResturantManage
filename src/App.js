import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './models/home'
import SelectTable   from './models/selectTable'
import Menu from './models/menu'
import Order from './models/order'
import Receipt from './models/receipt'

function App() {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/selectTable" component={SelectTable} />
          <Route exaxt path="/menu" component={Menu}/>
          <Route exaxt path="/order" component={Order}/>
          <Route exact path="/receipt" component={Receipt}/>
        </Switch>   
  );
}
export default App;
