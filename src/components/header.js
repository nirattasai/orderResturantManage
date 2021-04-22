import React from 'react';
import '../css/style.css'
import '../css/login.css'

function TheHeader(){
    return(
        <div>
            <div class='header'>
                <img class='logo' onClick={() => document.getElementById('login').style.display = "block"}/>
                <div id="login" class="modal">
                    <form class="modal-content animate" action="/action_page.php" method="post">
                        <div class="imgcontainer">
                            <span class="close" title="Close Modal close-animate" onClick={() => document.getElementById('login').style.display = "none"}>&times;</span>
                        </div>
                        <div class="container">
                            <label for="uname" class='u-p-text'><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>
                            <label for="psw" class='u-p-text'><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>
                            <button type="submit">Login</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
export default TheHeader;