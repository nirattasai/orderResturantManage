import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import '../css/orderPage.css'

const Order =()=> {
    
    const [orderList, setOrderList] = useState({
        order: []
    })


    const downloadOrder = async () => {
        db.ref(`/booking/${localStorage.getItem('currentKey')}/order`).on('value', snapshot => {
            const data = snapshot.val()
            if (data) {
                setOrderList({
                    order: Object.keys(data),
                    data: data
                })
            }
        })
    }

    function calPrice(){
        var price = 0
        for (let x in orderList.data){
            console.log (orderList.data[x].price)
            price += orderList.data[x].price
            console.log(price)
        }
        // for(let i=0; i<data.length; i++){
        //     console.log(data)
        // }
        db.ref(`/booking/${localStorage.getItem('currentKey')}/price`).on('value', snapshot => {
            price += snapshot.val()
        })
        console.log(price)
        return(price)
    }

    /*async function backToMenu(){
        db.ref(`/booking/${localStorage.getItem('currentKey')}/order`).set('')
        window.location.href = '/menu'
    }*/

    function confirm(){
        db.ref(`/booking/${localStorage.getItem('currentKey')}/price`).set(calPrice())
        db.ref(`/booking/${localStorage.getItem('currentKey')}/order`).set('')
        window.location.href = '/status'
    }

    useEffect(() => {
        downloadOrder()
        calPrice()
    }, db.ref(`/booking/${localStorage.getItem('currentKey')}/order`))

    return (
            <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Cart</span>
                </div>
                <div class='subtitle'></div>
                <span class='subtitle_text'>Order List</span>
                <br></br>
                <div class='pad'>
                    <div class='orderList'>
                        <span class='menu_name'>Menu Name</span>
                        <span class='quantity'>Quantity</span>
                        <br></br>
                        <div class='wrapper_order'>
                            {orderList.order.map((key, index) => {
                                    return (
                                        <div class='wrapper_box'>
                                            <div class='order'>
                                                <span class='menu_name_tab'>{orderList.data[key].menuName}</span>
                                                <span class='quantity_tab'>{orderList.data[key].amount}</span>
                                            </div>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <a class='confirm_button' onClick={()=>confirm()}>Next</a>
                </div>
            </div>
            );
    }

export default Order;