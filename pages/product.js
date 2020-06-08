import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import ProductPage from "./components/ProductPage/ProductPage.tsx";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = !(isMobile || isTablet);

  return (
    <div className="container" id="container">
      <ProductPage />
    </div>
  );
}
