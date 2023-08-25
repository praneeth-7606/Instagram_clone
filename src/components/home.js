// import { useEffect } from 'react'
import React,{useEffect} from 'react'
import img11 from './images/instaicon3.png'
import {useNavigate}   from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    useEffect(()=>{
        const timeoutId=setTimeout(()=>{
            navigate("/login");
        },5000);
        return()=>{
            clearTimeout(timeoutId)
        };
    },[navigate])
  return (
    <div>
        <center>
      <img src={img11} alt="myimag" style={{width:"7%",padding:'20%',height:'5%'}} />
      </center>
    </div>
  )
}

export default Home
