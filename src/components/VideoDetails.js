import React from 'react';


const VideDetails = ({video}) =>{
  if(!video){
    return<div>Loading....</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
  <div>
    <div className = 'ui embed'>
    <iframe title = "Video Player"src ={videoSrc}/>
    </div>
   <div className = 'ui segment'>
    <div className = "ui content">
        <h4 className = 'header'>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
    </div>
  </div>
  </div>


  );
}
export default VideDetails
