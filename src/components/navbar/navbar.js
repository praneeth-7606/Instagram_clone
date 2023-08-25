import React from 'react'
import "./nav.css"
import { Button } from '@mui/material';
import imgg from "./instatitle.png"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import img3 from "./create.png"
import img2 from "./messsage.png"
import img from "./reel.png"
import img4 from "./profile.png"
// D:\webdevelopment\Instagramclone\insta\src\components\navbar\instaheading.png
function Navbar() {
  return (
    <div className='navi'>
       <img style={{width:'150px',margin:'10px'}} src={imgg} alt="myimage"></img>
    
    <div className='sidenav_buttons'>
      <button style={{color:'white',textTransform:'capitalize'}} className='sidenav_icons'>
        <HomeIcon/>
        <span>Home</span>
      </button>
      <button style={{color:'white',textTransform:'capitalize'}} className='sidenav_icons'>
        <SearchIcon/>
        <span>Search</span>
      </button>
      <button  style={{color:'white',textTransform:'capitalize'}}className='sidenav_icons'>
        <ExploreIcon/>
        <span>Explore</span>
      </button>
      <button  className='sidenav_icons'>
        <SlideshowIcon/>
        <span>Reels</span>
      </button>
      <button style={{color:'white',textTransform:'capitalize',paddingRight:'12px'}} className='sidenav_icons'>
        <ChatIcon/>
        {/* <img src={img2} alt="img" style={{width:'1.5%'}}/> */}
        <span>Messages</span>
      </button>
      <button style={{color:'white',textTransform:'capitalize',paddingRight:'4px'}} className='sidenav_icons'>
        <FavoriteBorderIcon/>
        <span>Notifications</span>
      </button>
      <button style={{color:'white',textTransform:'capitalize'}} className='sidenav_icons'>
        <AddCircleOutlineIcon/>
        {/* <img src={img3} alt="img" style={{width:'1.5%'}}/> */}
        <span>create</span>
      </button>
    </div>
    
  <div className='sidenav_button'>
  <button  style={{color:'white',textTransform:'capitalize',}} className='sidenav_icons'>
        <MenuIcon/>
        {/* <img src={img4} alt="img" style={{width:'2%'}}/> */}
        <span>menu</span>
      </button>

  </div>
    </div>
  )
}

export default Navbar
