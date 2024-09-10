import React from "react";

// INTERNALIMPORT
import Style from "./Video.module.css";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome.
        </p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <iframe
              width="1000"
              height="540"
              src="https://www.youtube.com/embed/NNQLJcJEzv0" // Updated embed URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={Style.Video_box_frame_left_iframe}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
