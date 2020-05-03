import React, { useState, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";
import style from "./Intro.module.scss";

const Intro = ({ onVideoEnded, onVideoFullyFinished }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1025px)' });
  if (isMobile || isTablet) { // if mobile or tablet
    onVideoEnded();
    onVideoFullyFinished();
    return null;
  }
  const [isFade, setIsFade] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const video = useRef(null);

  return (
    <div className={cx(style["Intro"], { [style["fade"]]: isFade })}>
      <video
        muted
        autoPlay
        src="/video.mp4"
        preload={'auto'}
        className={style["video"]}
        onLoadedData={() => {
          console.log('loaded video data')
          setTimeout(() => {
            onVideoEnded();
          }, (video.current.duration * 1000 - 800)) //start fading before
        }}
        ref={video}
        onEnded={() => {
          setIsFade(true);
          onVideoFullyFinished();
          onVideoEnded();
        }}
      >
      </video>
    </div>
  );
};

export default Intro;
