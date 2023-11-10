import React from "react";
import "./side-bar.css";
import { useSelector } from "react-redux";

import Filter from "../Filter";

//вынести state checked сюда, передавать пропсом в фильтры, в фильтрах менять в сторе = там юзэффект
export default function SideBar() {
  const filters = useSelector((state) => state.filter);

  return (
    <div className="side-filters">
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <Filter id="all" state={filters["all"]} />
      <Filter id="0" state={filters["0"]} />
      <Filter id="1" state={filters["1"]} />
      <Filter id="2" state={filters["2"]} />
      <Filter id="3" state={filters["3"]} />
    </div>
  );
}
