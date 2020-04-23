import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage.tsx";
import Intro from "./components/Intro/Intro.tsx";

export default function Home() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isStartPlayingAnimation, setStartPlayingAnimation] = useState(false);
  console.log(isVideoFinished);
  return (
    <div className="container">
      <HomePage
        isAppeared={isVideoFinished}
        isStartPlayingAnimation={isStartPlayingAnimation}
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
