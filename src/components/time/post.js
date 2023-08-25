import React from 'react'
import { Avatar } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CommentIcon from '@mui/icons-material/Comment';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import img1 from "./shareicon.png"
import img2 from "./chat.png"
import { matchRoutes } from 'react-router-dom';
{/* <div className='postheader'> */}
{/* <div className='postheader_author'> */}
{/* <Avatar  sx={{ bgcolor: deepOrange[500] ,width:30,height:30 }}>N</Avatar>
  <span>path.webdev.21h</span>
  < MoreHorizIcon style={{paddingLeft:'380px'}}/>
  
  <img  className='posts_image'src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="myimage" />

  <div className='postfooter' >
      <FavoriteBorderIcon />
      <ChatBubbleOutlineIcon />
      <TelegramIcon/>
      
      <div>
     
      Liked by 2226 people
      </div>  
  
  </div>
</div> */}
function Post() {
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerAuthor'>
      <Avatar  sx={{ bgcolor: deepOrange[500] ,width:30,height:30 }}>N</Avatar>
      praneethvvsss <span>12h</span>
      </div>
      <MoreHorizIcon/>
      </div>
      
      
    <div className='post_image'></div>
    <img  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="myimage" />
    <div className='post_footer'></div>
      
      
      <FavoriteBorderIcon />
      <ChatBubbleOutlineIcon />
      <TelegramIcon/>
      <BookmarkBorderIcon style={{marginLeft:"500px"}}/>

      </div>


    
     
  )
}

export default Post
