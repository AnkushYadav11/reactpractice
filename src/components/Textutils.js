import React, { useState } from 'react';

export default function Textutils() {
    const [text,setText] = useState('');
    const [color, setColor] = useState('light');
   
    return(
        <>
        <div className='d-flex border flex-column justify-content-center'>
            <div className=''>
            <h1>Enter Your Text hear</h1>
            <textarea cols="100" rows="10" placeholder='Enter Your Text Here.' value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
            </div>
            <div className='border'>
            <button className='btn btn-primary m-2' onClick={()=>{let a = text.toUpperCase(); setText(a)}}>Upper</button>
            <button className='btn btn-secondary m-2' onClick={()=>{let a = text.toLowerCase(); setText(a)}}>Lower</button>
            <button className='btn btn-danger m-2' onClick={() =>{let text = ''; setText(text)}}>Clear</button>
            <button className='btn btn-outline-primary m-2'>Light</button>
            <button className='btn btn-outline-primary m-2'>White</button>
            <h5>Number of chars {text.length}</h5>
            <h5>Time to read {0.008 * text.split(' ').length} minutes</h5>
            <h5>Number of word {text.split(' ').length}</h5>
            </div>
        </div>
        </>
    );   
}