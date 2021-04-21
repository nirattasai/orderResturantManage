import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import '../css/oderPage.css'
import '../css/paymentPage.css'

const payment =()=> {
    
    return(
        <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Payment</span>
                    <a class='back_button' href="/order">&#60;</a>
                </div>
                <div class='subtitle'>
                <span class='subtitle_text_payment'>Scan for payment</span>
                </div>
                <br></br>
                <div class='pad'>
                    <img src="\4088e51e61d83b160b7c0d6aaea1d232.png" class="qr_code"></img>
                    <br></br>
                    <div class = 'total_pad'>
                        <span class='total_text'>Total</span>
                        <span class='baht_text'>Baht</span>
                        <span class='amount'>0</span>
                    </div>
                </div>
            </div>
    );
}

export default payment;