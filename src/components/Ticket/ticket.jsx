import React from "react";
import './ticket.scss';
import s7logo from './S7 Logo.png'

export default function Ticket() {

  return (
    <div className="ticket">
      <div className="top-info">
        <div className="price">
          <span className="price__amount">13 400 Р</span>
        </div>
        <div className="logo">
          <img src={s7logo} alt="logo"/>
        </div>
      </div>
      <div className="bottom-info">
        <div className="oneway-info"> 
          <div className="oneway-info__arrive">
            <span className="info">MOW - HKT</span>
            <span className="description">10:45 - 08:00</span>
          </div>
          <div className="oneway-info__time-onway">
            <span className="info">В ПУТИ</span>
            <span className="description">21ч 15м</span>
          </div>
          <div className="oneway-info__transits">
            <span className="info">2 пересадки</span>
            <span className="description">HKG, JNB</span>
          </div>
        </div>
        <div className="oneway-info"> 
          <div className="oneway-info__arrive">
            <span className="info">MOW - HKT</span>
            <span className="description">10:45 - 08:00</span>
          </div>
          <div className="oneway-info__time-onway">
            <span className="info">В ПУТИ</span>
            <span className="description">21ч 15м</span>
          </div>
          <div className="oneway-info__transits">
            <span className="info">2 пересадки</span>
            <span className="description">HKG, JNB</span>
          </div>
        </div>
      </div>
    </div>
  );
};