import React from 'react';
import '../css/style.css'
import userLogo from '../image/user.png'

function TheHeader(){
    return(
        <div>
            <div class='header'>
                <img src={userLogo} class='logo'/>
                
            </div>
        </div>
    );
}
export default TheHeader;