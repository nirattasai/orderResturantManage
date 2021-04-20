import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import '../css/oderPage.css'
import TheHeader from '../components/TheHeader'

const Order =()=> {

    const [orderList, setOrderList] = useState({
        order: []
    })

    const downloadOrder = async () => {
        db.ref(`/order/order_no${localStorage.orderNo}`).on('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            if (data) {
                setOrderList({
                    order: Object.keys(data),
                    data: data
                })
            }
        })
    }


    useEffect(() => {
        downloadOrder()
        console.log(orderList)
    }, db.ref(`/order/order_no${localStorage.orderNo}`))

    return (
            <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Cart</span>
                    <a class='back_button' href="/menu">&#60;</a>
                </div>
                <div class='subtitle'></div>
                <span class='subtitle_text'>Oder List</span>
                <br></br>
                <div class='pad'>
                    <div class='orderList'>
                        <span class='menu_name'>Menu Name</span>
                        <span class='quantity'>Quantity</span>
                        <br></br>
                        {orderList.order.map((key, index) => {
                                return (
                                    <div>
                                        <span class='menu_name_tab'>{orderList.data[key].menuName}</span>
                                        <span class='quantity_tab'>{orderList.data[key].amount}</span>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a class='confirm_button' href="/payment">Confirm</a>
                </div>
            </div>
            );
    }

export default Order;