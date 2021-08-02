import React from 'react'
import './style.scss'
function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <video className="KidsCodevideoPlayer" controlsList="nodownload" crossOrigin={true} src="https://www.w3schools.com/html/mov_bbb.mp4" controls preload="auto" ></video>
    </div> 
  )
}

export default VideoPlayer
