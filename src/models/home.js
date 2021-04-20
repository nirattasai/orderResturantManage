import React from 'react'
import TheHeader from '../components/TheHeader'
import '../css/style.css'
import '../css/order.css'
import '../css/oderPage.css'
import '../css/paymentPage.css'
import '../css/bookedPage.css'
import '../css/homePage.css'

const Home =()=> {
    return (
        <div>
            <div className='bgHome'></div>
            <div>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
                <span className='appName_text'>Application Name</span>
                <a className='booking' href='/booking'>Booking</a>
                <a className='booked' href='/booked'>Booked</a>
            </div>
        </div>
    );
}

export default Home;