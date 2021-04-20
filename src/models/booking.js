import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import '../css/oderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'
import '../css/bookingPage.css'

const Booking =()=> {
    
    return(
        <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Application Name</span>
                    <a class='back_button' href="/home">&#60;</a>
                </div>
                <div class='subtitle'>
                <span class='subtitle_text_payment'>Booking</span>
                </div>
                <br></br>
                <div class='pad_booking'>
                    <span class='bookerName_text'>Name</span>
                    <br></br>
                    <input class='booker_input'></input>
                    <br></br>
                    <span class='time_text'>Time</span>
                    <br></br>
                    <input class='time_input'></input>
                    <br></br>
                    <span class='telephoneNo_text'>Telephone NO.</span>
                    <br></br>
                    <input class='telephoneNO_input'></input>
                    <br></br>
                    <span class='customerAmount_text'>Customer Amount</span>
                    <br></br>
                    <input class='customerAmount_input'></input>
                    <br></br>
                    <a class='confirm_booking' href="/home">Confirm</a>
                    <a class='cancel_booking' href="/home">Cancel</a>
                </div>
            </div>
    );
}

export default Booking;