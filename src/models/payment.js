import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import $ from 'jquery'
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'
import '../css/paymentPage.css'

const Payment =()=> {
    var price
    function pullPrice(){
        db.ref(`/price`).on('value',snapshot=>{
            price = snapshot.val()
            console.log(snapshot.val())
            $('#price').html(price)
        })
    }
    

    return(
        <div class='bgOrder' onLoad={()=>pullPrice()}>
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
                        <span class='amount' id='price'></span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <a class='confirm_button' href='/transaction'>Test QR</a>
                </div>
            </div>
    );
}

export default Payment;