import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/orderPage.css'
import '../css/transactionPage.css'

const Transaction =()=> {
    
    return(
        <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Transaction</span>
                    <a class='back_button' href="/home">&#60;</a>
                </div>
                <div class='subtitle'>
                <span class='subtitle_text_payment'>Detail</span>
                </div>
                <br></br>
                <div class='pad'>
                    <div class='second_pad'>
                        <span class='name'>Name :</span>
                        <span class='name_customer'>Mr.Jack Been </span>
                        <br></br>
                        <span class='transactionID'>Transaction ID :</span>
                        <span class='transaction_number'>0123456789</span>
                        <br></br>
                        <span class='date'>Date :</span>
                        <span class='date_transaction'>00 / 00 / 00</span>
                        <br></br>
                        <span class='time'>Time :</span>
                        <span class='time_transaction'>00 . 00</span>
                        <br></br>
                        <span class='total'>Total :</span>
                        <span class='total_amount'>0</span>
                        <span class='baht'>  Baht.</span>
                        <br></br>
                        <img class='complete' src='/complete.png'></img>
                        <br></br>
                        <span class='complete_transaction'>COMPLETE</span>
                    </div>
                </div>
            </div>
    );
}

export default Transaction;