import React from 'react';
import '../css/quantityChoice.css'

class QuantityChoice extends React.Component {
    state = { counter: 0 };

    getCounter = () => {
        
        return(this.state.counter);
    }
  
    plusClicked = () => {
        if(this.state.counter >= 0 && this.state.counter < 10){this.setState(state => ({ counter: state.counter + 1 }));}
    };
  
    minusClicked = () => {
        if(this.state.counter > 0){this.setState(state => ({ counter: state.counter - 1 }));}
    };
    render() {
      return (
        <div class="qty mt-5">
            <span class="minus bg-dark" onClick={this.minusClicked}>-</span>
            <input type="number" class="count" name="qty" value={this.state.counter}/>
            <span class="plus bg-dark" onClick={this.plusClicked}>+</span>
        </div>
      );
    }
  }

export default QuantityChoice;