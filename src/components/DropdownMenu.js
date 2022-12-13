import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function SubMenu({ label, name, list = {}, onChange }) {
  let [selected, setSelected] = useState({});

  function handleChange(index) {
    let setValue = index in selected ? !selected[index] : true;
    let result = { ...selected, ...{ [index]: setValue } };
    setSelected(result);
    onChange({ target: { name, value: result } });
  }

  return (
    <>
      <label htmlFor={name}>{label || name}</label>
      <div className="group">
        <button>
          <ChevronUpIcon
            className="h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
          />
        </button>
        <ul
          className="transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top bg-white py-6 px-4">
          {Object.entries(list).map(([key, value], index) => (
            <li key={index} onClick={() => handleChange(index)}>
              <input
                type="checkbox"
                className="mr-4"
                name={name}
                id={name}
                value={value}
                checked={selected[index] || false}
                onChange={() => {}}
              />
              <span>{key}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
