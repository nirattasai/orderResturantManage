import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import TheHeader from '../components/TheHeader'

const Menu =()=> {

    const [menuList, setMenuList] = useState({
        subject_code: []
    })

    const fetchUpload = async () => {
        const order = localStorage.getItem('order')
        db.ref(`/menu`).on('value', snapshot => {
            const data = snapshot.val()
            console.log(data)
            if (data) {
                setMenuList({
                    subject_code: Object.keys(data),
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
            {menuList.subject_code.map((key, index) => {
                        return (
                            <div class='menu-box1'><>
                                    <li key={index}>{`MenuID : ${key}`} 
                                    <br></br>
                                    MenuName : {menuList.data[key].name}
                                    <br></br>
                                </li>
                            <hr></hr></></div>
                        )
                    })
            }
        </div>
        </div>
    );
}

export default Menu;