import React from 'react'
import { useState, useEffect} from 'react'
import { db } from "./../firebase"
import '../css/style.css'
import '../css/order.css'
import TheHeader from '../components/TheHeader'

const Order =()=> {
    const [menuList,setMenuList] = useState({
        subject_code: []
    })
    
    function pushMenuToOrder(){
        const menuList = localStorage.getItem('menuList')
    }
    
    const fetchDownload = async () => {
        db.ref(`/users/${localStorage.menuList}/download/`).on('value', snapshot => {
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
        fetchDownload()
    }, db.ref(`/users/${localStorage.menuList}/download/`))

    return (
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
    );
}

export default Order;