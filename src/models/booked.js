import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'

const Booked =()=> {
    
    return(
        <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
                <div class = 'title'>
                    <span class='title_text'>Application Name</span>
                    <a class='back_button' href="/home">&#60;</a>
                </div>
                <div class='subtitle'>
                <span class='subtitle_text_payment'>Booked</span>
                </div>
                <br></br>
                <div class='pad'>
                    <span class='bookerName_text'>Booker name</span>
                    <br></br>
                    <input class='booker_input'></input>
                    <br></br>
                    <span class='tableNO_text'>Table NO.</span>
                    <br></br>
                    <input class='table_input'></input>
                    <br></br>
                    <a class='confirm' href="/menu">Confirm</a>
                    <br></br>
                    <a class='cancel' href="/home">Cancel</a>
                </div>
            </div>
    );
}

export default Booked;