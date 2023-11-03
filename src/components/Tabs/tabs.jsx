import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortState } from "../../store/actions";

import './tabs.scss'

export default function Tabs() {
  // Сохраняет в store состояние сортировки
  
  const [ activeTab, setActiveTab ] = useState(useSelector(state => state.sort.sortState));

  const dispatch = useDispatch();
  const changeSort = (value) => {
    setActiveTab(value);
    dispatch(changeSortState({value}));
  }

  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => changeSort('tab1')}>САМЫЙ ДЕШЕВЫЙ</li>
        <li className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => changeSort('tab2')}>САМЫЙ БЫСТРЫЙ</li>
        <li className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => changeSort('tab3')}>ОПТИМАЛЬНЫЙ</li>
      </ul>
    </div>
  );
}