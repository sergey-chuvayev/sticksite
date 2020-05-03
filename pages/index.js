import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import HomePage from "./components/HomePage/HomePage.tsx";
import Intro from "./components/Intro/Intro.tsx";

const WITH_INTRO = false;

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 769px)' });
  const isDesktop = !(isMobile || isTablet);
  const [isVideoFinished, setIsVideoFinished] = useState(!isDesktop || !WITH_INTRO || false);
  const [isStartPlayingSprite, setStartPlayingAnimation] = useState(!isDesktop || !WITH_INTRO || false);

  return (
    <div className="container">
      <HomePage
        isAppeared={isVideoFinished}
        isStartPlayingSprite={isStartPlayingSprite}
      />
      {isDesktop && WITH_INTRO && (
        <Intro
          onVideoEnded={() => {
            setIsVideoFinished(true);
          }}
          onVideoFullyFinished={() => {
            setStartPlayingAnimation(true);
          }}
        />
      )}
    </div>
  );
}
