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
        db.ref(`/order`).on('value', snapshot => {
            const data = snapshot.val()
            if (data) {
                setOrderList({
                    order: Object.keys(data),
                    data: data
                })
                calPrice(data)
            }
        })
    }

    function calPrice(data){
        console.log(data)
        let price = 0
        for (let x in data){
            console.log (data[x].price)
            price += data[x].price
        }
        // for(let i=0; i<data.length; i++){
        //     console.log(data)
        // }
        db.ref(`/price`).set(price)
    }

    async function backToMenu(){
        db.ref('/order').set('')
        db.ref('/price').set(0)
        window.location.href = '/menu'
    }

    useEffect(() => {
        downloadOrder()
    }, db.ref(`/order`))

    return (
            <div class='bgOrder'>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
            
                <div class = 'title'>
                    <span class='title_text'>Cart</span>
                    <a class='back_button' onClick={()=>backToMenu()}>&#60;</a>
                </div>
                <div class='subtitle'></div>
                <span class='subtitle_text'>Oder List</span>
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
                    <a class='confirm_button' href="/payment">Confirm</a>
                </div>
            </div>
            );
    }

export default Order;