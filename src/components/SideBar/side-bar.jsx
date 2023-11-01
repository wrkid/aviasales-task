import React from "react";
import './side-bar.css'

import Filter from '../Filter';

export default function SideBar() {
  return (
    <div className="side-filters">
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <Filter text = 'Все'/>
      <Filter text = 'Без пересадок'/>
      <Filter text = '1 пересадка'/>
      <Filter text = '2 пересадки'/>
      <Filter text = '3 пересадки'/>
    </div>
  )
}