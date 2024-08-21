import React from "react";

import "./Header.css";

import { useTelegram } from "../../hooks/useTelegram";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";
import Button from "../Button/Button";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}></Button>
      <LanguageSwitch />
      <span className=".username">
        {user?.username && `Добро пожаловать ${user.username}`}
      </span>
    </div>
  );
};

export default Header;
