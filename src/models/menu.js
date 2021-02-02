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
        db.ref(`/users/${order}/upload/`).on('value', snapshot => {
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
    }, db.ref(`/users/${localStorage.getItem('order')}/upload/`))

    return (
        <div>
            <TheHeader/>
        </div>
    );
}

export default Menu;