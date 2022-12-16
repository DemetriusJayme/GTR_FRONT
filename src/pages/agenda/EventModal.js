import { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import api from "../../api/api";

function EventModal() {
  useEffect(() => {
    async function fetchTasks() {
      try {
        localStorage.removeItem("savedEvents");
        const response = await api.get("/task/all");
        response.data.map((task) =>
          completeCalendar(
            task.name,
            task._id,
            task.priority,
            new Date(task.deadline).getTime() + 21600000
          )
        );
      } catch (error) {}
    }
    fetchTasks();
  }, []);

  const { dispatchCalEvent } = useContext(GlobalContext);

  function completeCalendar(ctitle, cid, clabel, cday) {
    const calendarEvent = {
      title: ctitle,
      idhtml: cid,
      label: clabel,
      day: cday, //daySelected.valueOf(),
      id: Date.now(),
    };
    if (document.getElementById(cid) === null) {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
  }

  return <></>;
}

export default EventModal;
