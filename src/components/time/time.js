import React from 'react'
import "./time.css"
import Sugesstions from '../navbar/sugesstions'
import Post from "./post"
import Post1 from './post1'


function Time() {
  return (
    <div className='timeline'>
      <div className='timelineleft'>
        <div className='timeheader'>
        <Post1 prop3={"P"} prop2={" Liked by Rajuhari and 360 others"} prop1={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}/>
        <Post1   prop3={"R"} prop2={" Liked by Vamsi and 280 others"} prop1={"https://images.unsplash.com/photo-1687565021770-cdb4e32002a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
        <Post1  prop3={"A"} prop2={" Liked by   Vasukrishna and 490 others "}prop1={"https://images.unsplash.com/photo-1687579520892-5160c0df4b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        <Post1   prop3={"N"} prop2={" Liked by Sasankgollapudi and 568 others "} prop1={"https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"}/>
        <Post1  prop3={"E"} prop2={" Liked by Harikrishna and 280 others"}  prop1={"https://images.unsplash.com/photo-1572569372592-1117b746e563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"}/>
        <Post1   prop3={"E"} prop2={" Liked by Hero123 and 280 others"} prop1={"https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        <Post1   prop3={"T"} prop2={" Liked by anurag_17 and 562 others"} prop1={"https://images.unsplash.com/photo-1468465704228-4966aabccd18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}/>
        <Post1   prop3={"H"} prop2={" Liked by anurag_17 and 562 others"} prop1={"https://images.unsplash.com/photo-1468465704228-4966aabccd18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}/>
        </div>
        </div>
      <div className='timelineright'>
    <Sugesstions/>
      </div>

      {/* <p>hello welcome to timeline page brother</p> */}
    </div>
  )
}

export default Time
