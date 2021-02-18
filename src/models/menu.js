import React from 'react'
import { useState,useEffect } from 'react'
import { db } from "./../firebase"
import '../css/style.css'
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

    const uploadMenu = async() => {
        db.ref(`/order`).set(orderList)
    }

    return (
        <div>
            <div>
            <TheHeader/>
            <br></br>
            <div class="menu-box1">Test Menu Item</div>
            
            {menuList.menu.map((key, index) => {
                        return (
                            <div class='menu-box1'>
                                MenuName : {menuList.data[key].menuName}<br/>
                                MenuID : {menuList.data[key].menuID}<br/>                       
                                {/* <QuantityChoice menuID={menuList.data[key]} menuName={menuList.data[key].menuName}/> */}
                                <QuantityChoice/>
                            </div>
                            
                        )
                    })
            }
            </div>
        </div>
    );
}

export default Menu;