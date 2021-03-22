import React from 'react'
import { useState,useEffect } from 'react'
import $ from "jquery";
import { db } from "./../firebase"
import '../css/style.css'
import '../css/menu.css'
import '../css/quantityChoice.css'
import TheHeader from '../components/TheHeader'

const Menu =()=> {

    const [menuList, setMenuList] = useState({
        menu: []
    })
    var [orderList, setOrderList] = useState({
        menu:[]
    })

    const downloadMenu = async () => {
        db.ref(`/menu`).on('value', snapshot => {
            const data = snapshot.val()
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

    function plusClicked(key){
        if(menuList.data[key].amount >= 0 && menuList.data[key].amount < 99){
            menuList.data[key].amount +=1
        };
        $('.count#'+key).html(menuList.data[key].amount)
    }
    function minusClicked(key){
        if(menuList.data[key].amount > 0){
            menuList.data[key].amount -= 1 
        }
        $('.count#'+key).html(menuList.data[key].amount)
    }

    async function setOrder(){
        var menu = []
        var objList = []
        $.each($('.menu-box1'),function(index, element){
            var obj = {}
            menu.push($(this).attr('name'))
            obj.menuName = $(this).attr('name')
            obj.menuID = $(this).attr('id')
            obj.amount = menuList.data[$(this).find('div').find('.count').attr('id')].amount
            objList.push(obj)
        });
        orderList = {
            menu: menu,
            data: objList
        }
        console.log(orderList)
    };

    async function uploadOrder(){
        await setOrder()
        
        await db.ref(`/tableNo`).on('value', snapshot => {
            const data = snapshot.val()
            localStorage.setItem('tableNo',data)
        })

        await db.ref(`/orderNo`).on('value', snapshot => {
            const data = snapshot.val()
            localStorage.setItem('orderNo',data)
        })

        await db.ref(`/table/table_no${localStorage.tableNo}/status`).set(1)

        for(var i=0; i<orderList.menu.length; i++){
            await db.ref(`/table/table_no${localStorage.tableNo}/allOrder/orderNo${localStorage.orderNo}/${orderList.menu[i]}`).set(orderList.data[i])
        }
    }
    return (
        <div>
            <div>
            <TheHeader/>
            <br></br>
            {menuList.menu.map((key, index) => {
                    return (
                        <div class='menu-box1' id={menuList.data[key].menuID} name={menuList.data[key].menuName}>
                            MenuName : {menuList.data[key].menuName}<br/>
                            MenuID : {menuList.data[key].menuID}<br/>                       
                            <div class="qty mt-5">    
                                <span class="minus bg-dark" onClick={() => minusClicked(key)}>-</span>
                                <span class="count" name="qty" id={key}>{menuList.data[key].amount}</span>
                                <span class="plus bg-dark" onClick={() => plusClicked(key)}>+</span>
                            </div>
                        </div>
                        )
                    })
            }
            </div>
            <a class="button" href="/order" onClick="uploadOrder;return false;">OK</a>
        </div>
    );
}

export default Menu;

