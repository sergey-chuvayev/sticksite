import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import HomePage from "./components/HomePage/HomePage.tsx";
import CategoryPage from "./components/CategoryPage/CategoryPage.tsx";
import Intro from "./components/Intro/Intro.tsx";

const WITH_INTRO = false;

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = !(isMobile || isTablet);
  const [isVideoFinished, setIsVideoFinished] = useState(!isDesktop || !WITH_INTRO || false);
  const [isStartPlayingSprite, setStartPlayingAnimation] = useState(!isDesktop || !WITH_INTRO || false);

  // if (isMobile) {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   window.addEventListener("resize", () => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   });
  // }

  return (
    <div className="container" id="container">
      <CategoryPage />
      {/* <HomePage
        isAppeared={isVideoFinished}
        isStartPlayingSprite={isStartPlayingSprite}
      /> */}
      {/* {isDesktop && WITH_INTRO && (
        <Intro
          onVideoEnded={() => {
            setIsVideoFinished(true);
          }}
          onVideoFullyFinished={() => {
            setStartPlayingAnimation(true);
          }}
        />
      )} */}
    </div>
  );
}
