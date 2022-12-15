import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="hidden md:inline mr-10 text-xl text-gray-500 fond-bold">
        My Agend
      </h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button
        onClick={handlePrevMonth}
        aria-label="calendar backward"
        className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="15 6 9 12 15 18"></polyline>
        </svg>
      </button>
      <button
        onClick={handleNextMonth}
        aria-label="calendar forward"
        className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="9 6 15 12 9 18"></polyline>
        </svg>
      </button>
      <h2 className="ml-4 text-sm md:text-md lg:text-lg text-gray-500 font-bold  hidden md:inline">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
