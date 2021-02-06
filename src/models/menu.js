import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import TheHeader from '../components/TheHeader'

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
                                <input type="text" id="quantity" value="Amount"/>
                            </div>
                        )
                    })
            }
        </div>
        </div>
    );
}

export default Menu;