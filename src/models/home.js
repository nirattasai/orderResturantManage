import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { db } from "./../firebase"
import { useState,useEffect } from 'react'
import $ from "jquery";
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'
import '../css/homePage.css'

const Home =()=> {

    return (
        <div class='bgHome'>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            <a className='booking' href='/booking'>Booking</a>
            <a className='booked' href='/booked'>Booked</a>
        </div>
    );
}

export default Home;