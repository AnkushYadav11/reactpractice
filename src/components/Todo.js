import React, { useState } from "react";

export default function Todo(){

    const [item,setItem] = useState();

    const onChange=(event)=>{
        setItem(event.target.value)
    }
    const onClick=()=>{
        setItem(item)
    }
    return(
        <>
        <div className="container">
        <h1>To Do List</h1>

        <input type="text" value={item} onChange={onChange} placeholder="Enter Your Plain..." />
        <button onClick={onClick}>Add</button>
        <ul>
            <li value={item} onChange={onClick}></li>
        </ul>
        </div>
        </>
    )
}