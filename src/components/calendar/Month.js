import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-col-1 md:grid-cols-7 md:grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => {
            return (
              <Day day={day} key={idx} rowIdx={i} />
            )
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
