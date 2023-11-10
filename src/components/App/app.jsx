import React from "react";

import "./app.scss";

import Logo from "../../assets/img/Logo.svg";

import SideBar from "../SideBar";
import Content from "../Content";
import { useSelector } from "react-redux";

export default function App() {
  const isLoaded = useSelector((state) => state.data.stop);

  const classedLogo = () => {
    if (isLoaded) {
      return "logomain";
    }
    return "logo-spinner";
  };

  return (
    <div className="app__container">
      <img className={classedLogo()} src={Logo} alt="logo" />
      <div className="app__inner">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}
