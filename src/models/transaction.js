import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import $ from 'jquery'
import '../css/orderPage.css'
import '../css/transactionPage.css'

const Transaction =()=> {
    var tranID 
    var price
    function reset(){
        db.ref('/order').set('')
        db.ref('/price').set(0)
    }
    function pushTranID(){
        db.ref('/tranID').set(tranID+1)
    }
    function pullTranID(){
        db.ref('tranID').on('value', snapshot => {
            tranID = snapshot.val()
            var tranStr = String(tranID)
            for(var i=0; i<8; i++){
                if(tranStr.length < 8){
                    tranStr = '0' + tranStr
                }
                console.log(tranStr.length)
            }
            $('#tranID').html(tranStr)
        })
    }
    function pullPrice(){
        db.ref(`/price`).on('value',snapshot=>{
            price = snapshot.val()
            console.log(snapshot.val())
            $('#price').html(price)
        })
    }
    function complete(){
        pushTranID()
        reset()
        window.location.href = '/home'
    }
    /*async function tranToStr(){
        pullTranID()
        var tranStr = String(tranID)
        console.log(tranStr)
        console.log(tranStr.length)
        for(var i=0; i<8; i++){
            if(tranStr.length < 8){
                tranStr = '0' + tranStr
            }
            console.log(tranStr.length)
        }
        $('#tranID').html(tranStr)
    }*/
    function dateTimeNow(){
        var dateObj = new Date()
        var month = dateObj.getMonth()+1;
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var hour = dateObj.getHours();
        var minute = dateObj.getMinutes()
        $('#dateTimeNow').html(day+'/'+month+'/'+year)
        $('#timeNow').html(hour+':'+minute)

    }
    
    useEffect(()=>{
        pullTranID()
        dateTimeNow()
        pullPrice()
    },db.ref('/tranID'))
    
    return(
        <div class='bgOrder' >
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
                        <span class='transaction_number' id='tranID'></span>
                        <br></br>
                        <span class='date'>Date :</span>
                        <span class='date_transaction' id='dateTimeNow'></span>
                        <br></br>
                        <span class='time'>Time :</span>
                        <span class='time_transaction' id='timeNow'></span>
                        <br></br>
                        <span class='total'>Total :</span>
                        <span class='total_amount' id='price'></span>
                        <span class='baht'>  Baht.</span>
                        <br></br>
                        <img class='complete' src='/complete.png' onClick={()=>complete()}></img>
                        <br></br>
                        <span class='complete_transaction'>COMPLETE</span>
                    </div>
                </div>
            </div>
    );
}

export default Transaction;