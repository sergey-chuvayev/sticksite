import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage.tsx";
import Intro from "./components/Intro/Intro.tsx";

export default function Home() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isStartPlayingSprite, setStartPlayingAnimation] = useState(false);
  return (
    <div className="container">
      <HomePage
        isAppeared={isVideoFinished}
        isStartPlayingSprite={isStartPlayingSprite}
      />
      <Intro
        onVideoEnded={() => {
          setIsVideoFinished(true);
        }}
        onVideoFullyFinished={() => {
          setStartPlayingAnimation(true);
        }}
      />
    </div>
  );
}
