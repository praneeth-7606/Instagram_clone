// import { ToggleButton } from '@mui/material';
import React,{useState} from 'react'

function Themeset() {
    const[theme ,settheme]=useState("light")
    const lighttheme={
        backgroundColor:'white',
        color:'black',
    };
    const darktheme={
        backgroundColor:'balck',
        color:'white'
    };
    function toggletheme(){
        settheme(prevtheme=>(prevtheme=== 'light'?"dark":"light"))
    }
    const themestyle=theme==="light"?lighttheme:darktheme;

  return (
    <div style={themestyle}>
        <h1> hello bro </h1>
        <button onClick={toggletheme}>Themechange</button>
      
    </div>
  )
}

export default Themeset
