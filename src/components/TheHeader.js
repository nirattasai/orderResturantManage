import React from 'react';
import '../css/style.css'

function TheHeader(){
    return(
        <div>
            <header className="TheHeader">
                <div>
                    <a class="menu-item brand" href="/home">Home</a>
                    <a class="menu-item" href="/selectTable">SelectTable</a>
                    <a class="menu-item" href="/menu">Menu</a>
                    <a class="menu-item" href="/order">Order</a>
                </div>
            </header>
        </div>
    );
}
export default TheHeader;