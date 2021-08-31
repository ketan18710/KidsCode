import React from 'react'
import './style.scss'
function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <video className="KidsCodevideoPlayer" controlsList="nodownload" crossOrigin={true} src="https://media.istockphoto.com/videos/technology-interface-computer-data-screen-display-animation-video-id488946534" controls preload="auto" ></video>
    </div> 
  )
}

export default VideoPlayer
