import React from "react";
import Vid from "../assets/video.mp4";
import './Video.css';

const Video: React.FC = () => {
  return (
    <div className="video-container">
      <video className="video-player" controls>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
