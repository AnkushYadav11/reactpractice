import React, { useState } from "react";

export default function Form(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();

    const onHandleClick=(event)=>{
        console.log(name);
        console.log(email);

        let nameReg = /^[A-Za-z]+$/;
        let emailReg =/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if(!nameReg.test(name)){
            alert("Enter Valid Name....")
        }

        if(!emailReg.test(email)){
            alert("Enter Valid Email...")
        }

        const user = [name,email]
        const data = JSON.parse(localStorage.getItem('data')) ||[];
        data.push(user)
        localStorage.setItem('data',JSON.stringify(data));
    }
    return(
        <>
        <div className="container mt-5">
        Name:-
        <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} className="mb-2"/><br/>
        Email:-
        <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} className="mb-2"/><br/>
        <button onClick={onHandleClick} className="btn btn-primary mb-2 pr-2">Submit</button>
        </div>
        </>
    );
}