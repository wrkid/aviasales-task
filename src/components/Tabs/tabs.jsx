import React, { useState } from "react";

import './tabs.scss'

export default function Tabs() {
  const [ activeTab, setActiveTab ] = useState('tab1');

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}>САМЫЙ ДЕШЕВЫЙ</li>
        <li className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}>САМЫЙ БЫСТРЫЙ</li>
        <li className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => setActiveTab('tab3')}>ОПТИМАЛЬНЫЙ</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
}