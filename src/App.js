import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './models/home'
import SelectTable   from './models/selectTable'
import Menu from './models/menu'
import Order from './models/order'
import Payment from './models/payment'
import Booked from './models/booked'
import Booking from './models/booking'

function App() {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/selectTable" component={SelectTable} />
          <Route exaxt path="/menu" component={Menu}/>
          <Route exaxt path="/order" component={Order}/>
          <Route exact path="/payment" component={Payment}/>
          <Route exact path="/booked" component={Booked}/>
          <Route exact path="/booking" component={Booking}/>
        </Switch>   
  );
}
export default App;
