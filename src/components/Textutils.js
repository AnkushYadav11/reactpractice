import React, { useState } from 'react';

export default function Textutils(props) {
    const [text, setText] = useState('');

    return (
        <>
            <div className='d-flex flex-column justify-content-center' style={{
                backgroundColor: props.mode === 'white' ? 'white' : 'gray', color: props.mode === 'white' ? 'black' : 'white'
            }}>
                <div>
                    <h1>Enter Your Text hear</h1>
                    <textarea cols="100" rows="10" style={{
                        backgroundColor: props.mode === 'white' ? 'white' : 'gray',
                        color: props.mode === 'white' ? 'balck' : 'white', borderColor: props.mode === 'white' ? 'black' : 'white'
                    }} placeholder='Enter Your Text Here.' value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>
                <div>
                    <button className='btn btn-primary m-2' onClick={() => { let a = text.toUpperCase(); setText(a) }}>Upper</button>
                    <button className='btn btn-secondary m-2' onClick={() => { let a = text.toLowerCase(); setText(a) }}>Lower</button>
                    <button className='btn btn-danger m-2' onClick={() => { let text = ''; setText(text) }}>Clear</button>
                    <h5>Number of chars {text.length}</h5>
                    <h5>Time to read {0.008 * text.split(" ").length} minutes</h5>
                    <h5>Number of word {text.split(' ').length - 1}</h5>
                    <h5>Preview</h5>
                    <p>{text === '' ? 'Please enter some text':text}</p>
                </div>
            </div>
        </>
    );
}