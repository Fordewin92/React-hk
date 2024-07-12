import React from 'react';
import './BackgroundVideo.css';

function BackgroundVideo() {
  return (
    <video
      muted
      loop
      autoPlay
      className="background-video"
    >
      <source
        src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;