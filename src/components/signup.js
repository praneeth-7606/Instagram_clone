import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { Card,Button,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import { grey } from '@mui/material/colors'
import image from './images/myinstaimg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import image2 from './images/myinsta2.png'
import img1 from './images/play.png'
import img2 from './images/app.png'
import { getAuth,createInWithEmailAndPassword } from 'firebase/auth';
// D:\webdevelopment\Instagramclone\insta\src\components\images\app.png
// import {} from '@mui/material'
// style={{border: '1.5px solid rgba(0, 0, 0, 0.2)'}
function Signup() {
    
  return (
    <div>
        <center>
        <div className='one'>
            <h1>Instagram</h1>
            <p style={{fontFamily:'Priori Sans Light'}}>Sign up to see photos and videos from your friends.</p>
            <Button variant="contained" startIcon={<FacebookIcon/>}style={{textTransform:'capitalize',width:'90%'}}>Log in with facebook</Button>
            <div style={{display:'flex',alignItems:'center',padding:'3%'}}>
                <hr style={{flexGrow:'1' ,color:grey, height:'1px', marginRight:'10px'}} />

               
                <span>{"OR"}</span>
                <hr style={{flexGrow:'1',color:'grey',height:'1px',marginLeft:'10px'}} />

                
            </div>
            
            <input  style={{marginBottom:'6px'}} className='tex' type="text" placeholder='Mobile number or email address'/>
            <br></br>
            <input style={{marginBottom:'6px'}}  className='tex'  type="text" placeholder='Fullname'/><br></br>
            <input  style={{marginBottom:'6px'}} className='tex'  type="text" placeholder='username'/><br></br>
            <input  style={{marginBottom:'6px'}} className='tex' type="password" placeholder='password'/><br></br>
            
            <p  style={{fontSize:'10px',fontFamily:''}}>People who use our service may have uploaded your contact information to Instagram. Learn more</p><br></br>
            <p style={{fontSize:'10px',fontFamily:'',textAlign:'center',alignContent:'center'}}>By signing up, you agree to our <Link style={{textDecorationLine:'none',color:'blue'}} path to="https://help.instagram.com/581066165581870/?locale=en_GB">Terms</Link>,<Link style={{textDecorationLine:'none',color:'blue'}} path to="https://www.facebook.com/privacy/policy">Privacy Policy</Link>  and <Link style={{textDecorationLine:'none',color:'blue'}} path to="https://help.instagram.com/1896641480634370/">Cookies Policy</Link>.</p>
            <Button variant="contained"style={{backgroundcolor:'#4cb5f9', textTransform:'capitalize',width:'90%',borderRadius:'4%'}}>sign up</Button>
            
            <p></p>

        </div>
        </center>
        <center>
            <div className='one1'>
                <span style={{marginRight:'1%', paddingLeft:'3%'}} >Have an account?</span>
                <Link  style={{textDecorationLine:'none' ,color:'#3aaef8'}} path to="/loginpage">Log In</Link>
            </div>
           
        </center>
        <p style={{ textAlign:'center'}}>Get the app</p>
        <div className='images'>   
        
        <img  src={img1} alt="img1" style={{width:'10%'}}/>
        <img src={img2} alt="img2" style={{width:'10%'}}/>
       
        </div>
        
        
    </div>
  )
}

export default Signup
