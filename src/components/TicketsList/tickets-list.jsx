import React, { useEffect } from "react";

import "./tickets-list.scss";

import { fetchData } from "../../store/asyncActions/fetchData";

import { useState } from "react";

import Ticket from "../Ticket";
import { useDispatch, useSelector } from "react-redux";

export default function TicketsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [num, setNum] = useState(5);

  const filters = useSelector((state) => state.filter);

  const filtersArr = () => {
    let arr = [];
    for (let key in filters) {
      if (filters[key]) {
        arr.push(key);
      }
    }
    return arr;
  };

  const sort = useSelector((state) => state.sort.sortState);

  const tickets = useSelector((state) => state.data.data);

  const loadMore = () => {
    if (tickets.length >= 5) setNum((num) => num + 5);
  };

  const filteredList = () =>
    tickets.filter(
      (ticket) =>
        filtersArr().indexOf(ticket.segments[0].stops.length.toString()) !==
          -1 &&
        filtersArr().indexOf(ticket.segments[1].stops.length.toString()) !== -1,
    );

  const sortedList = () => {
    const list = filteredList();
    if (sort === "tab1")
      return list.sort((a, b) => (a.price > b.price ? 1 : -1));
    else if (sort === "tab2") {
      return list.sort((a, b) =>
        a.segments[0].duration > b.segments[0].duration ? 1 : -1,
      );
    }
  };

  const emtyTicket = (
    <div className="empty-ticket">
      <span>Рейсов, подходящих под заданные параметры, не найдено</span>
    </div>
  );

  const ticketsList = () => {
    if (sortedList().length === 0) {
      return emtyTicket;
    }
    let i = 0;
    return sortedList().map((ticket) => {
      if (i < num) {
        i++;
        return (
          <Ticket
            key={`${ticket.price}${ticket.carrier}${ticket.segments[0].duration}${ticket.segments[1]}`}
            props={ticket}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="tickets-list">
      {ticketsList()}
      {sortedList().length !== 0 && (
        <button type="button" onClick={() => loadMore()}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  );
}
