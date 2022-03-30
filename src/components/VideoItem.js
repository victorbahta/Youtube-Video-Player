import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  const snap = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={snap.title}
        className="ui image"
        src={snap.thumbnails.medium.url}
      />
      <div className="content">
        <h4 className="header">{snap.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
