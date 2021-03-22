import React from 'react'
import { useState,useEffect } from 'react'
import $ from "jquery";
import { db } from "./../firebase"
import '../css/style.css'
import '../css/menu.css'
import '../css/oderPage.css'
import TheHeader from '../components/TheHeader'
import QuantityChoice from '../components/QuantityChoice'

const Menu =()=> {

    const [menuList, setMenuList] = useState({
        menu: []
    })

    const downloadMenu = async () => {
        db.ref(`/menu`).on('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            if (data) {
                setMenuList({
                    menu: Object.keys(data),
                    data: data
                })
            }
        })
    }

    useEffect(() => {
        downloadMenu()
    }, db.ref(`/menu`))


    const [orderList, setOrderList] = useState({
        order: []
    })

   /* sendMenuToOrder(() => {
        for(let i=0;menuList[i];i++){
            if (menuList.data[i].amount != 0){
                setOrderList({
                    order: menuList[i].keys(data),
                    data: data
                })
            }
        }
    })*/ 

    function setOrder(){
        $('div[class="menu-box1"]').each(function(index, obj){
            setOrderList({
                order: menuList[index]
            })
        })
        console.log("Click")
        console.log(menuList.data[0])
    }

    const uploadMenu = async() => {
        db.ref(`/order`).set(orderList)
    }

    return (
<<<<<<< HEAD
        <div class = "center">
=======
        <div class='bgOrder'>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy" />
>>>>>>> order
            <div>
            {/* <TheHeader/> */}
            <br></br>
            <div class="menu-box1">Test Menu Item</div>
            
            {menuList.menu.map((key, index) => {
<<<<<<< HEAD
                        return (
                            <div class='menu-box1'>
                                MenuName : {menuList.data[key].menuName}<br/>
                                MenuID : {menuList.data[key].menuID}<br/>        
                                <img class="food-img" src={menuList.data[key].image}/>            
                                <QuantityChoice/>
                                

                            </div>
                            
                        )
                    })
            }
            <button class="button1">Confirm</button>
            </div>
=======
                    return (
                        <div class='menu-box1'>
                            MenuName : {menuList.data[key].menuName}<br/>
                            MenuID : {menuList.data[key].menuID}<br/>                       
                            <QuantityChoice/>                        
                        </div>
                        )
                    })
            }
            </div>
            <a class="button" onClick={setOrder} href='/order'>OK</a>
>>>>>>> order
        </div>
    );
}

export default Menu;