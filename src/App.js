import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './models/home'
import Menu from './models/menu'
import Order from './models/order'
import Booking from './models/booking'
import Booked from './models/booked'
import Payment from './models/payment'
import Transaction from './models/transaction'
import Status from './models/status'

function App() {
  return (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/booking" component={Booking}/>
          <Route exact path="/home" component={Home} />
          <Route exaxt path="/menu" component={Menu}/>
          <Route exaxt path="/order" component={Order}/>
          <Route exaxt path="/booked" component={Booked}/>
          <Route exaxt path="/payment" component={Payment}/>
          <Route exaxt path="/transaction" component={Transaction}/>
          <Route exaxt path='/status' component={Status}/>
        </Switch>   
  );
}
export default App;
