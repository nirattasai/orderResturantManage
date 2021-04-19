import React from 'react'
import { useState,useEffect } from 'react'
import $ from "jquery";
import { db } from "./../firebase"
import '../css/style.css'
import '../css/menu.css'
import '../css/quantityChoice.css'
import '../css/menuPage.css'
import '../css/orderPage.css'

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
        $('.quantity_count#'+key).html(menuList.data[key].amount)
    }
    function minusClicked(key){
        if(menuList.data[key].amount > 0){
            menuList.data[key].amount -= 1 
        }
        $('.quantity_count#'+key).html(menuList.data[key].amount)
    }

    async function setOrder(){
        var menu = []
        var objList = []
        $.each($('.detail'),function(index, element){
            var obj = {}
            if(menuList.data[$(this).find('.quantity_count').attr('id')].amount > 0){
                menu.push(menuList.data[$(this).find('.quantity_count').attr('id')].menuName)
                obj.menuName = menuList.data[$(this).find('.quantity_count').attr('id')].menuName
                obj.menuID = menuList.data[$(this).find('.quantity_count').attr('id')].menuID
                obj.amount = menuList.data[$(this).find('.quantity_count').attr('id')].amount
                obj.price = obj.amount*(menuList.data[$(this).find('.quantity_count').attr('id')].unitPrice)
                objList.push(obj)
            }
        });
        orderList = {
            menu: menu,
            data: objList
        }
    };

    async function uploadOrder(){
        if (window.confirm('Are you sure?')){
            await setOrder()

        for(var i=0; i<orderList.menu.length; i++){
            await db.ref(`/order/${orderList.menu[i]}`).set(orderList.data[i])
        }
        window.location.href = "/order"
        }
    }
    return (
        <div class='bgOrder'>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Chewy"/>
            <div class = 'title'>
                <span class='title_text'>Menu List</span>
                <a class='back_button' href="/">&#60;</a>
            </div>    
            <br></br>
            <div class='wrapper_menu'>
            {menuList.menu.map((key, index) => {
                    return (
                        
                        <div class='wrapper-detail'>
                            <div class='pad_image'> 
                                <img src={menuList.data[key].img} class='food-image'></img>
                            </div>
                            <div class='detail'>
                                <span class='menuList_name'>{menuList.data[key].menuName}</span>
                                <span class='menuList_price'>{menuList.data[key].unitPrice} B / piece </span>   
                                <img src="/minus.png" class="minus_button" onClick={() => minusClicked(key)}></img>
                                <img src="/plus.png" class="plus_button" onClick={() => plusClicked(key)}></img>
                                <span class="quantity_count" id={key}>{menuList.data[key].amount}</span>
                            </div>
                        </div>
                        )
                }   )
            }
            </div>
            <a class="add_button" onClick={uploadOrder}>Add to cart</a>
        </div>
    );
}

export default Menu;