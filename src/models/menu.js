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

    const fetchUpload = async () => {
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
        fetchUpload()
    }, db.ref(`/menu`))

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