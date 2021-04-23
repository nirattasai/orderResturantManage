import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import $ from 'jquery'
import '../css/statusPage.css'

const Status =()=> {
    var status = 'Status: Preparing Food'
    function updateStatus(){
        status = 'Status: Already Served'
        $('#status').html(status)
    }
    return(
        <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Status</span>
                    <a class='back_button' href="/order">&#60;</a>
                </div>
                <div class='subtitle'>
                    <span class='subtitle_text_status' id='status'>Status: Preparing Food</span>
                </div>
                <br></br>
                <a class='test_button' onClick={()=>updateStatus()}>Test finish</a>
                <a class='add_menu_button' href='/menu'>Order more</a>
                <a class='pay_button' href='/payment'>Pay now</a>
        </div>
    );
}

export default Status;