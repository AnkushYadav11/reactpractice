import React, { useState } from 'react';

export default function Textutils() {
    const [text, setText] = useState('');
    const [btntext,setbtnText] = useState("Enable Dark Mode.")
    const [color, setColor] = useState({
        color: "black",
        background: "white"
    });

    const toggal = () => {
        if (color.color === "black") {
            setColor({
                color: "white",
                background: "black"
            })
            setbtnText("Enable Light Mode");
        }
        else {
            setColor({
                color: "black",
                background: "white"
            })
            setbtnText("Enable Dark Mode");
        }
    }
    return (
        <>
            <div className='d-flex flex-column justify-content-center' style={color}>
                <div className=''>
                    <h1>Enter Your Text hear</h1>
                    <textarea style={color} cols="100" rows="10" placeholder='Enter Your Text Here.' value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>
                <div>
                    <button className='btn btn-primary m-2' onClick={() => { let a = text.toUpperCase(); setText(a) }}>Upper</button>
                    <button className='btn btn-secondary m-2' onClick={() => { let a = text.toLowerCase(); setText(a) }}>Lower</button>
                    <button className='btn btn-danger m-2' onClick={() => { let text = ''; setText(text) }}>Clear</button>
                    <button className='btn btn-outline-primary m-2' onClick={toggal}>{btntext}</button>
                    <h5>Number of chars {text.length}</h5>
                    <h5>Time to read {0.008 * text.split(" ").length} minutes</h5>
                    <h5>Number of word {text.split(' ').length - 1}</h5>
                </div>
            </div>
        </>
    );
}