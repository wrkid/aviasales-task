import React from "react";
import { add } from "date-fns";
import "./ticket.scss";

export default function Ticket({ props }) {
  const { price, carrier, segments } = props;

  const priceStr = () => {
    if (price.toString().length === 4) {
      return `${price.toString().slice(0, 1)} ${price.toString().slice(1, 4)}`;
    }
    if (price.toString().length === 5) {
      return `${price.toString().slice(0, 2)} ${price.toString().slice(2, 5)}`;
    }
    if (price.toString().length === 6) {
      return `${price.toString().slice(0, 3)} ${price.toString().slice(3, 6)}`;
    }
  };

  const stopsStr1 = () => {
    const l = segments[0].stops.length;
    switch (l) {
      case 1:
        return `1 пересадка`;
      case 2:
      case 3:
        return `${l} пересадки`;
      case 4:
        return `${l} пересадки`;
      default:
        return "Нет пересадок";
    }
  };

  const stopsStr2 = () => {
    const l = segments[1].stops.length;
    switch (l) {
      case 1:
        return `1 пересадка`;
      case 2:
      case 3:
        return `${l} пересадки`;
      case 6 || 7 || 8:
        return `${l} пересадок`;
      default:
        return "Нет пересадок";
    }
  };

  const timeOnWay = (mins) => {
    const m = mins % 60;
    const h = (mins - m) / 60;
    return `${h}ч ${m}м`;
  };

  const timeStr = (time) => {
    if (time.toString().length === 1) {
      return `0${time}`;
    }
    return time;
  };

  const arriveTime1 = () => {
    const time = new Date(segments[0].date);
    const newTime = add(time, { minutes: segments[0].duration });
    return `${timeStr(time.getHours())}:${timeStr(
      time.getMinutes(),
    )} - ${timeStr(newTime.getHours())}:${timeStr(newTime.getMinutes())}`;
  };

  const arriveTime2 = () => {
    const time = new Date(segments[1].date);
    const newTime = add(time, { minutes: segments[1].duration });
    return `${timeStr(time.getHours())}:${timeStr(
      time.getMinutes(),
    )} - ${timeStr(newTime.getHours())}:${timeStr(newTime.getMinutes())}`;
  };

  return (
    <div className="ticket">
      <div className="top-info">
        <div className="price">
          <span className="price__amount">{`${priceStr()} P`}</span>
        </div>
        <div className="logo">
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
        </div>
      </div>
      <div className="bottom-info">
        <div className="oneway-info">
          <div className="oneway-info__arrive">
            <span className="info">{`${segments[0].origin} - ${segments[0].destination}`}</span>
            <span className="description">{arriveTime1()}</span>
          </div>
          <div className="oneway-info__time-onway">
            <span className="info">В ПУТИ</span>
            <span className="description">
              {timeOnWay(segments[0].duration)}
            </span>
          </div>
          <div className="oneway-info__transits">
            <span className="info">{stopsStr1()}</span>
            <span className="description">{`${segments[0].stops}`}</span>
          </div>
        </div>
        <div className="oneway-info">
          <div className="oneway-info__arrive">
            <span className="info">{`${segments[1].origin} - ${segments[1].destination}`}</span>
            <span className="description">{arriveTime2()}</span>
          </div>
          <div className="oneway-info__time-onway">
            <span className="info">В ПУТИ</span>
            <span className="description">
              {timeOnWay(segments[1].duration)}
            </span>
          </div>
          <div className="oneway-info__transits">
            <span className="info">{stopsStr2()}</span>
            <span className="description">{`${segments[1].stops}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
