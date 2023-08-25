
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
import "./post1.css"

function Post1({prop1,prop2,prop3} ) {
  return (
    <div>
       <div className='mypost_header'>
       <Avatar  sx={{ bgcolor: deepOrange[500] ,width:30,height:30 ,marginRight:'10px', marginDown:'100px'}}>{prop3}</Avatar>
        <span>praneethvvsss.21h</span>
        <MoreHorizIcon style={{marginLeft:'360px'}}/>
       </div>
       <div  >
      <img className='image1' src={prop1} alt="myimage"  style={{marginTop:'10px'}}/>
       </div>
       <div className='footers'>
        <div className='footersinn'>
       <FavoriteBorderIcon />
        <ChatBubbleOutlineIcon style={{marginLeft:'8px'}} />
        <TelegramIcon style={{marginLeft:'8px'}}/>
        </div>
        <BookmarkBorderIcon style={{marginLeft:'445px'}} />
       
       </div>
       <div>
       <span style={{fontWeight:'700',marginRight:'7px'}} >{prop2}</span> 
       <div>
       <span style={{fontWeight:'700',marginRight:'7px'}}>uix.nan</span>
       <span style={{fontWeight:'400'}}>Hi guys</span>
       <br></br>
       ...more
       <br></br>
       <span style={{fontWeight:'100',fontSize:'15px'}}>Add a comment...</span>
       </div>
       <p></p>
       <p></p>
       </div>
       
    </div>
  )
}

export default Post1
