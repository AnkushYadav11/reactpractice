import React, { useState } from 'react';

export default function Textutils() {
    const [text,setText] = useState('');
    let count = 1;
    const words = ()=>{
        if(text === ' '){
          return count++;
        }
    }
    return(
        <>
        <div className='flex'>
            <div>
            <h1>Enter Your Text hear</h1>
            <textarea cols="30" rows="10" placeholder='Enter Your Text Here.' value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
            <button className='btn btn-primary m-2' onClick={()=>{let a = text.toUpperCase(); setText(a)}}>Upper</button>
            <button className='btn btn-secondary m-2' onClick={()=>{let a = text.toLowerCase(); setText(a)}}>Lower</button>
            <button className='btn btn-danger m-2' onClick={() =>{let text = ''; setText(text)}}>Clear</button>
            <h5>Number of chars {text.length}</h5>
            <h5>Time to read{text.length/200}</h5>
            <h5>Number of word {words}</h5>
            </div>
        </div>
        </>
    );   
}