import React from "react";
import './filter.scss';

export default function Filter({text}) {
  return (
    <div className="filter-item">
      <label>
        <input type="checkbox" />
        <span>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Checkbox">
              <rect id="Form" x="1.24133" y="1.23016" width="18.7414" height="19.1587" rx="1.5" stroke="#2196F3"/>
              <path id="Shape" d="M8.91993 14.8413L4.68964 10.972L5.88258 9.8809L8.91993 12.6513L15.3415 6.77777L16.5345 7.87663L8.91993 14.8413Z" fill="#2196F3"/>
            </g>
          </svg>
        </span>
      </label>
      <div>{text}</div>
    </div>
  );
}