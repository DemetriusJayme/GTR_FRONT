import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../../components/calendar/util";
import CalendarHeader from "../../components/calendar/CalendarHeader";
import Sidebar from "../../components/calendar/Sidebar";
import Month from "../../components/calendar/Month";
import GlobalContext from "../../contexts/GlobalContext";
import EventModal from "../../components/calendar/EventModal";
function AppAgenda() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="md:hidden flex">
          <Sidebar />
        </div>
        <div className="flex flex-1 h-screen md:overflow-hidden">
          <div className="hidden md:inline">
            <Sidebar />
          </div>
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppAgenda;
