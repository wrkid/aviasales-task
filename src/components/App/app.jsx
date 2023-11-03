import React from "react";
import { Provider } from "react-redux";

import { store } from "../../store";

import './app.scss';

import Logo from './Logo.svg';

import SideBar from "../SideBar";
import Content from '../Content';

export default function  App() {

  return (
    <Provider store = {store}>
      <div className="app__container">
        <img className="logomain" src={Logo} alt = "logo"/>
        <div className="app__inner">
          <SideBar />
          <Content />
        </div>
      </div>
    </Provider>
  );
}