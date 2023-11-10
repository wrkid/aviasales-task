import React from "react";

import "./content.scss";

import TicketsList from "../TicketsList";
import Tabs from "../Tabs";

export default function Content() {
  return (
    <div className="Content">
      <Tabs />
      <TicketsList />
    </div>
  );
}
