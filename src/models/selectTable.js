import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import '../css/style.css'
import TheHeader from '../components/TheHeader'

const SelectTable =()=> {
    function login () {
        console.log(tableNumber)
    }
    const [tableNumber,setTableNumber] = useState()
    function setTable(){
        setTableNumber(document.getElementById("table").value)
    }
    return (
        <div>
            <TheHeader/>
            <select class="select-item" name="table" id="table" onChange={setTable}>
                <option value="none">Please select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select><br/>
            <button type="submit" onClick={login}>
                <Link to="/menu">ยืนยัน</Link>
            </button>
        </div>
    );
}

export default SelectTable;