import React from 'react';
import './VideoItem.css'

const VideoItem = ({video ,onVideoSelect}) =>{


  return(
    <div onClick = {() => onVideoSelect(video)} className = 'video-item item'>

        <img alt= {video.snippet.title} className="ui image" src ={video.snippet.thumbnails.medium.url}/>

      <div className = "content">
        <h4 className ="header">{video.snippet.title}</h4>
        <br/>
        <span>{video.snippet.channelTitle}</span>
      </div>
  </div>
);
}
export default VideoItem
