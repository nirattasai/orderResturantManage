import React from 'react'
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { Select } from "@chakra-ui/react"

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
                <Select placeholder="Select option" onChange={setTable} id="table">
                    <option value="1">โต๊ะ 1</option>
                    <option value="2">โต๊ะ 2</option>
                    <option value="3">โต๊ะ 3</option>
                </Select>
                <Button colorScheme="teal" variant="solid" onClick={login}>OK</Button>
            </div>
    );
}

export default Home;