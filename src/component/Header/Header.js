import React from "react";

import "./Header.css";

import { useTelegram } from "../../hooks/useTelegram";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";

const Header = () => {
  const { user } = useTelegram();

  return (
    <div className="header">
      <LanguageSwitch />
      <span className=".username">{user?.username && `${user.username}`}</span>
    </div>
  );
};

export default Header;
