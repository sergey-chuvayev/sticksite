import React, { useState } from "react";
import cx from "classnames";

import Icon from "./icons/Icon";

const menuStructue = [
  {
    name: "Auto",
    id: "auto",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Home & Office",
    id: "home",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Sport",
    id: "sport",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Travel",
    id: "travel",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Music",
    id: "music",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Blogging",
    id: "blogging",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "Horeca",
    id: "horeca",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
  {
    name: "No phone",
    id: "nophone",
    subItems: [
      { name: "Gym", icon: "/icons/velo.svg" },
      { name: "Outdoor", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Yoga", icon: "/icons/velo.svg" },
      { name: "Bike", icon: "/icons/velo.svg" },
      { name: "Sailing", icon: "/icons/velo.svg" },
    ],
  },
];

const SubMenu = ({
  items,
  color,
}: {
  items: { name: string; icon: string }[];
  color: "white" | "black";
}) => {
  return (
    <div className="SubMenu">
      {items.map((item) => (
        <div className="SubMenu__sub-item">
          <Icon
            name="velo"
            className={cx("SubMenu__sub-item-icon", color)}
            color={color}
          />
          <span className="SubMenu__sub-item-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

const Item = ({
  item,
  isActive,
  onClick,
  color,
}: {
  item: {
    name: string;
    id: string;
    subItems: { name: string; icon: string }[];
  };
  color: "white" | "black";
  isActive?: boolean;
  onClick: (itemId: string) => void;
}) => {
  return (
    <div className={cx("VerticalMenu__Item__item", { "is-active": isActive })}>
      <div
        className="VerticalMenu__Item__item-name-container"
        onClick={() => {
          onClick(item.id);
        }}
      >
        <svg
          width="7"
          height="9"
          viewBox="0 0 7 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="VerticalMenu__Item__arrow-right"
          onClick={() => {
            onClick(item.id);
          }}
        >
          <path
            d="M4.89781 4.67416L1.56753 7.93333C1.45239 8.04602 1.45239 8.22872 1.56753 8.34141C1.68269 8.45407 1.86936 8.45407 1.98451 8.34141L5.52328 4.8782C5.6384 4.76551 5.6384 4.58281 5.52328 4.47012L1.98451 1.00691C1.86736 0.896184 1.68067 0.899364 1.56753 1.01401C1.45716 1.12586 1.45716 1.30316 1.56753 1.41499L4.89781 4.67416Z"
            fill="white"
            stroke="white"
          />
        </svg>
        <span className="VerticalMenu__Item__item-name">{item.name}</span>
      </div>
      <div className="VerticalMenu__Item__item-submenu">
        {isActive && <SubMenu color={color} items={item.subItems} />}
      </div>
    </div>
  );
};

const VerticalMenu = ({ color }: { color: "black" | "white" }) => {
  const [selectedItem, setSelectedItem] = useState("sport");
  return (
    <div className={cx("VerticalMenu", color)}>
      {menuStructue.map((item) => (
        <Item
          onClick={setSelectedItem}
          item={item}
          isActive={item.id === selectedItem}
          color={color}
        />
      ))}
    </div>
  );
};

export default VerticalMenu;
