import React from "react";

import './tabs.scss'

export default function Tabs() {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>САМЫЙ ДЕШЕВЫЙ</li>
        <li>САМЫЙ БЫСТРЫЙ</li>
        <li>ОПТИМАЛЬНЫЙ</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
}