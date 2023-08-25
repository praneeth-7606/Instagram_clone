import React, { useState,useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {useNavigate,Link} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// import {firebase} from 'firebase/app';
// import { FirebaseApp } from 'firebase/app';
import firebase from 'firebase/app';

import 'firebase/auth';

// Import other Firebase services if needed

import { TextField, Button, Card,FormControl,InputAdornment, FormGroup } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import image from './images/myinstaimg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import image2 from './images/myinsta2.png'
import img1 from './images/play.png'
import img2 from './images/app.png'
import Themeset from './themeset';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import checkboxClasses from '@mui/material';


// import 
function Loginpage ()  {
  const[verified ,setverified]=useState(false)
  const[name,setname]=useState({Email:"",Password:""})

  const Navigate=useNavigate();
  const{Email,Password}=name
 



  useEffect(() => {
    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: "AIzaSyBQ_6oC2RRInl_kjw4FdNaIJxxpzZc0Wfw",
      authDomain: "instagramclone-3f56d.firebaseapp.com",
      projectId: "instagramclone-3f56d",
      storageBucket: "instagramclone-3f56d.appspot.com",
      messagingSenderId: "128926579420",
      appId: "1:128926579420:web:023f29108ff2c5622ad219",
      measurementId: "G-KVT0YLDL4M"
    };

    initializeApp(firebaseConfig);
  }, []);
  const changehandler=(e)=>{
    setname({...name,[e.target.name]:e.target.value})
   
}
const handlechange=()=>{
  setverified(true)
}
 

  const submithandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // alert("signin  is successfull")
    Navigate("/mainpage")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("please enter the valid email and password")
    
  });
    }

  return (
    <div className="main1">
      <img  src={image} alt='my image' style={{height:"5%",
  width:"25%",marginBottom:'19%'}}  />
    {/* <div className="main2"> */}
      <div className='card'>
        <div  style={{border: '1.5px solid rgba(0, 0, 0, 0.2)'}}>
      <h1 style={{fontFamily:' Pacifico'}}>Instagram</h1>
      <form onSubmit={submithandler} >
      {/* <FormControl autoComplete='off' onSubmit={submithandler}> */}
        <input className='text' type="email" placeholder='Phonenumber, username or email address' name="Email" onChange={changehandler}/>
      {/* <TextField className="text" id="outlined-basic"  type="email" name="Email" placeholder='abc.email.com' style={{padding:'2%', marginTop:'2%'}}onChange={changehandler}
       label="Email" variant="outlined" /><br></br> */}
       <br></br>
       <input  className="text"  type="password" name="Password"  onChange={changehandler} placeholder='Password'/>
        {/* <TextField  className="text" id="outlined-basic" type="password" style={{marginDown:'2%',padding:'2%'}} name="Password" placeholder='**********' onChange={changehandler} 
     label="Password" variant="outlined" /> */}
      <br></br>
      {/* <Checkbox {...label} /> */}
     {/* <FormGroup className='formm'>
      <FormControlLabel  control={<Checkbox/>} label="saveinfo"/>
     </FormGroup> */}
     <br></br>
     <div >
     <ReCAPTCHA className='recaptcha'  tclass sitekey="6LeAIdUmAAAAADd1IuofJi16zC6FeGsC3iE8kY6P" data-scale="0.4" onChange={handlechange} />
     </div>
      <Button  className="button"  disabled={!verified}  style={{textTransform:'capitalize',height:'3%'}} onClick={submithandler} variant="contained">Log in</Button><br></br>
      {/* <button className='button' disabled onClick={submithandler}>Log In</button> */}
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center', padding:"3%" }}>
      <hr style={{ flexGrow: 1, height: '1px', color: 'gray', marginRight: '10px' }} />
      <span>{"OR"}</span>
      <hr style={{ flexGrow: 1, height: '1px', color: 'gray', marginLeft: '10px',  }} />
    </div><br></br>
    <div className='dp'>
    <FacebookIcon style={{color:"#385185"}} />
    <Link  style={{textDecorationLine:'none',color:'#385185' ,marginLeft:'3%'}} to="https://en-gb.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569678%7Cb%7Cfacbook%20com%7C&placement&creative=589460569678&keyword=facbook%20com&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221352%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1438637489%26loc_physical_ms%3D9299895%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2XbJoYGAC8bufn0aW10zeP6eYXlkFYyM3R5_R3erDu9z_xfiN_1h4aAoaIEALw_wcB"> Log in with Facebook</Link>
      </div>
      {/* <p>Log in with facebook </p> */}
        {/* <Button variant="contained" color="primary" type="submit"> */}
          {/* Login */}
        {/* </Button> */}
      {/* </FormControl> */}
      </form>
      </div>
      
      <div>
      <div className='card1' >
      <span className='p'>Don't have an account?</span>
      <Link  style={{textDecorationLine:'none', color:'blue',marginLeft:'.2%'}}path to="/signup">Signup</Link>
      {/* <span></span> */}
      {/* <Link path to="/forgot">Forgot Password</Link> */}
      <br></br>
      {/* <Link path to="/https://www.youtube.com/watch?v=Xpl8RRT8_Y0&ab_channel=SriBalajiMovies">youtube</Link> */}
      </div> 
      </div>
      <p>Get the app</p>
      <div className='images'>
        
      <div className='image1'>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D7EC538AA-5CCA-451C-8230-434DF1E16DA8%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge" ><img src={img1} alt="image"  width='50%'  /></a> 
      <a href="https://apps.apple.com/in/app/instagram/id389801252"><img src={img2} alt="" width="50%"/></a>
    
        </div>
{/* <Themeset/> */}
      </div>
      {/* <img src={image2} alt="myimg" style={{width:'120%',height:'120%'}}/> */}
      
      </div>
    
    </div>
    
   
    
  );
};

export default Loginpage;
