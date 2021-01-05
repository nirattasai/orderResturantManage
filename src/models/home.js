import React from 'react'
import { useState } from "react"

const Home =()=> {
    function login () {
        console.log(tableNumber)
    }
    const [tableNumber,setTableNumber] = useState()
    function setTable(){
        setTableNumber(document.getElementById("table").value)
    }
    return (
        <div>
            <h1>หมายเลขโต๊ะ</h1>
            <select name="table" id="table" onChange={setTable}>
                <option value="none">Please select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button type="submit" onClick={login}>ยืนยัน</button>
        </div>
    );
}

export default Home;