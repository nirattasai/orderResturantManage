import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import $, { each } from 'jquery'
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'
import '../css/bookingPage.css'

const Booking =()=> {
    async function checkText(){
        /*$('#input').blur(function(){
            if( !$(this).val() ) {
                window.alert('Please fill all fields!!')
            }else{
                window.alert('Complete!!')
                window.location.href = '/home'
            }
        });*/
        console.log($('#bName').val())
        if(($('#bName').val() != '' ) && ($('#bTime').val() != '') && ($('#bPhone').val() != '') && ($('#bCusAmount').val() != '')) {
            window.alert('Complete!!')
            await db.ref(`/booking`).push({
                name: $('#bName').val(),
                phone: $('#bPhone').val(),
                time: $('#bTime').val(),
                cusAmount: $('#bCusAmount').val()
            })

            window.location.href = '/home'
        }else{
            window.alert('Please fill details!!')
        }
    }
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
                    <input class='booker_input' id='bName'></input>
                    <br></br>
                    <span class='time_text'>Time</span>
                    <br></br>
                    <input class='time_input' id='bTime'></input>
                    <br></br>
                    <span class='telephoneNo_text' >Telephone No.</span>
                    <br></br>
                    <input class='telephoneNO_input' id='bPhone'></input>
                    <br></br>
                    <span class='customerAmount_text'>Customer Amount</span>
                    <br></br>
                    <input class='customerAmount_input' id='bCusAmount'></input>
                    <br></br>
                    <a class='confirm_booking' onClick={()=>checkText()}>Confirm</a>
                    <a class='cancel_booking' href="/home">Cancel</a>
                </div>
            </div>
    );
}

export default Booking;