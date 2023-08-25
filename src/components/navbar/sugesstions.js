import React from 'react'
import { Avatar } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Button} from '@mui/material';
import "./sugesstions.css"
// D:\webdevelopment\Instagramclone\insta\src\components\navbar\sugesstions.css
// import 

function Sugesstions() {
  return (
    <div className='suggestions' >
      <div classname="suggestions_title">
        suggestions for you
     </div>
     <div className='sugg_usernames'>
     <div className='sugg_username'>
      <div className='username_left'>
        <span className='avatar'>
        <Avatar>TNG</Avatar>
        </span>
        <div className='username_info'>
          <span className='username'>redian_</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
        <button className='follow_button' >Follow</button>
     </div>

     <div className='sugg_username'>
      <div className='username_left'>
        <span className='avatar'>
        <Avatar>TNG</Avatar>
        </span>
        <div className='username_info'>
          <span className='username'>redian_</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
        <button className='follow_button'>Follow</button>

      
     </div>
     <div className='sugg_username'>
      <div className='username_left'>
        <span className='avatar'>
        <Avatar>TNG</Avatar>
        </span>
        <div className='username_info'>
          <span className='username'>redian_</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
        <button className='follow_button'>Follow</button>
     </div>
     <div className='sugg_username'>
      <div className='username_left'>
        <span className='avatar'>
        <Avatar>TNG</Avatar>
        </span>
        <div className='username_info'>
          <span className='username'>redian_</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
        <button className='follow_button' >Follow</button>
     </div>
     </div>
     
    </div>
  )
}

export default Sugesstions
