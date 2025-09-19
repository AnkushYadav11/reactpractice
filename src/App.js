import { useState } from 'react';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import React from 'react';

function App() {
  const [mode, setMode] = useState('white');
  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const myToggal = () =>{
    if(mode === 'white'){
      setMode('dark')
      setBtnText('Enabel Light Mode')
      document.body.style.backgroundColor = 'gray'
    }
    else{
      setMode('white')
      setBtnText('Enabel Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title="Welcome" mode={mode} myStyle={myToggal} btnText={btnText}/>
    <Textutils mode={mode}/>
    </>
  );
}

export default App;