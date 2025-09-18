import React, { useState } from "react";

export function Counter(){
    const [count,setCount] = useState(0);
    function onHandleClick(){
    setCount(count+1);
    }

    function onHandleClearClick(){
        setCount(0);
    }
    return(
        <>
        <h1>Counter:- {count} </h1>
        <button onClick={onHandleClick}>Click Me</button>
        <button onClick={onHandleClearClick}>Clear Counter</button>
        </>
    )
}
