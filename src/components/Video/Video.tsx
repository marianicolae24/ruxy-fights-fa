import React from "react";
import "./video.css";

function Video() {
  return (
    <section>
      <div className="layout-container">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/mQ4Oj9n7f6s?si=vRVLQ7PjcvlokufV&amp;start=10"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
