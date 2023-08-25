import React from 'react'
// import {Card} from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import ExploreIcon from '@mui/icons-material/Explore';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import MenuIcon from '@mui/icons-material/Menu';
// import img3 from "./images/create.png"
// import img2 from "./images/messsage.png"
// import img from "./images/reel.png"
// import img4 from "./images/profile.png"
// import { Avatar } from '@mui/material';
import Navbar from './navbar/navbar';
// D:\webdevelopment\Instagramclone\insta\src\components\navbar\navbar.js
import Time from './time/time';
// style={{marginLeft:'3%',marginTop:'2%'}}
// style={{marginLeft:'3%',marginTop:'2%'}}
function Mainpage() {
  return (
    <div className='main'>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='time'>
        <Time/>
      </div>
    
    </div>
  )
}

export default Mainpage
