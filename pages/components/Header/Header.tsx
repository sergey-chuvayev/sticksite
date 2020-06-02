import React from "react";
import cx from 'classnames';

import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

const Header = ({ themeColor, onOpenMenu }) => {
  return (
    <div
      className={cx("Header__top", { "black": themeColor === "black" })}
    >
      <a href="#" className="Header__logo">
        <Logo color={themeColor} />
      </a>
      <div className="Header__menu">
        <Menu themeColor={themeColor} />
      </div>
      <div className="Header__cart">
        <div className="Header__counter">99</div>
      </div>
      <div className="Header__mobile-logo" />
      <div className="Header__burger" onClick={onOpenMenu} />
    </div>
  );
};

export default Header;
