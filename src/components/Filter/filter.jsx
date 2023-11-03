import React from "react";
import './filter.scss';

import { useDispatch } from "react-redux";
import { changeState } from "../../store/actions";

import checkedLogo from './checkedLogo.svg';
import uncheckedLogo from './uncheckedLogo.svg'

export default function Filter({id, state}) {

  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(changeState({id}));
  };

  const filterName = () => {
    switch (id) {
      case 'all': return 'Все';
      case '0': return 'Без пересадок';
      case '1': return '1 пересадка';
      case '2': return '2 пересадки';
      case '3': return '3 пересадки';
      default: return '';
    }
  }

  return (
    <div className="filter-item">
      <label htmlFor={id}>
        <input id={id} type="checkbox" onClick={() => handleCheck()}/>
        <span htmlFor={id}>
          <img src={state === true ? checkedLogo : uncheckedLogo} alt='checkbox'/>
        </span>
      </label>
      <div>{filterName()}</div>
    </div>
  );
}