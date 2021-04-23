import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import $, { data } from 'jquery'
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'

const Booked =()=> {

    var [bookingList, setBookingList] = useState({
        key: []
    })
    var data

    async function checkText(){
        let status = 'none'
        if(($('#bName').val() != '' ) && ($('#bPhone').val() != '')) {
            for (let x in bookingList.data){
                if (bookingList.data[x].name == $('#bName').val() && bookingList.data[x].phone == $('#bPhone').val()){
                    console.log(x)
                    window.localStorage.setItem('currentKey',x)
                    window.alert('Complete!!')
                    status = 'success'
                    window.location.href = '/menu'
                }
            }
            if (status == 'none'){
                window.alert('Please check your details!!')
            }
        }else{
            
            window.alert('Please fill details!!')
        }
    }

    const downloadBooking = async () =>{
        db.ref(`/booking`).on('value',snapshot => {
            const data = snapshot.val()
            if (data) {
                setBookingList({
                    key: Object.keys(data),
                    data: data
                })
            }}
        )
    }

    useEffect(() => {
        downloadBooking()
    }, db.ref(`/booking`))

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
                    <input class='booker_input' id='bName'></input>
                    <br></br>
                    <span class='tableNO_text'>Telephone No.</span>
                    <br></br>
                    <input class='table_input' id='bPhone'></input>
                    <br></br>
                    <a class='confirm' onClick={()=>checkText()}>Confirm</a>
                    <br></br>
                    <a class='cancel' href="/home">Cancel</a>
                </div>
            </div>
    );
}

export default Booked;