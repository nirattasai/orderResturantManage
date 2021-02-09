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
            {menuList.menu.map((key, index) => {
                        return (
                            <div class='flexbox'>
                                <div class="item">
                                    <div class="content">
                                        <img src={menuList.data[key].image} class="imageSize"></img>
                                        MenuName : {menuList.data[key].menuName}<br/>
                                        MenuID : {menuList.data[key].menuID}<br/>                       
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
            }
        </div>
        </div>
    );
}

export default Menu;