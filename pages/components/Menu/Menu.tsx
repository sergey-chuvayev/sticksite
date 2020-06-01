import React, { useState } from "react";
import cx from "classnames";

const Menu = ({ themeColor }) => {
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  return (
    <div className={cx("Menu__menu", { black: themeColor === "black" })}>
      <div
        className="Menu__menu-item with-arrow"
        onMouseEnter={() => {
          setIsSubMenuOpened(true);
        }}
        onMouseLeave={(e) => {
          setIsSubMenuOpened(false);
        }}
      >
        <span>How to use</span>{" "}
        <svg
          className={cx("Menu__arrow", { black: themeColor === "black" })}
          width="7"
          height="9"
          viewBox="0 0 7 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.89781 4.67416L1.56753 7.93333C1.45239 8.04602 1.45239 8.22872 1.56753 8.34141C1.68269 8.45407 1.86936 8.45407 1.98451 8.34141L5.52328 4.8782C5.6384 4.76551 5.6384 4.58281 5.52328 4.47012L1.98451 1.00691C1.86736 0.896184 1.68067 0.899364 1.56753 1.01401C1.45716 1.12586 1.45716 1.30316 1.56753 1.41499L4.89781 4.67416Z"
            fill="white"
            stroke="white"
          />
        </svg>
        {isSubMenuOpened && (
          <div className="Menu__menu-sub-overlay">
            <div
              className={cx("Menu__menu-sub", {
                "open-animation": isSubMenuOpened,
              })}
            >
              <div className="Menu__menu-sub-item">
                <span>Auto</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Home & Office</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Sport</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Travel</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Music</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Blogging</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>Horeca</span>
              </div>
              <div className="Menu__menu-sub-item">
                <span>No phone</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Menu__menu-item">Products</div>
      <div className="Menu__menu-item">Shop</div>
      <div className="Menu__menu-item">Company</div>
    </div>
  );
};

export default Menu;
