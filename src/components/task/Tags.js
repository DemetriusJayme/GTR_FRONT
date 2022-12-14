import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Tags({ onChange, selected = [] }) {
  const [value, setValue] = useState("");

  function handleChange({ target }) {
    setValue(target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      let res = Array.from(new Set([...selected, value]));

      onChange({ target: { name: "tags", value: res } });
      setValue("");
    }
  }

  function deleteTag(tag) {
    let res = new Set(selected);
    res.delete(tag);
    res = Array.from(res);
    onChange({ target: { name: "tags", value: res } });
  }

  return (
    <div>
      <label htmlFor="tags">Tags</label>
      {selected.map((tag) => (
        <span key={tag} className="btn">
          {tag}
          <button>
            <XCircleIcon
              className="ml-1.5 h-4 w-4 text-gray-500"
              onClick={() => deleteTag(tag)}
            />
          </button>
        </span>
      ))}
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
    </div>
  );
}
