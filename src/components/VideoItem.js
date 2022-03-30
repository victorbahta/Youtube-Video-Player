import React from "react";

const VideoItem = ({ video }) => {
  const snap = video.snippet;
  return (
    <div className="item">
      <img className="ui image" src={snap.thumbnails.medium.url} />
      <div className="content">
        <h4 className="header">{snap.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
