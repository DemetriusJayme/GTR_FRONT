import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import Tags from "../../components/task/Tags";

const emptyDefault = {
  description: "",
  name: "",
  deadline: new Date().toISOString().split("T")[0],
  estimated: "00:30",
  priority: "regular",
  status: "started",
  // annex: [],
  members: [],
  tags: [],
};

const defaultKeys = Object.keys(emptyDefault);

function pick(obj, keys) {
  let shallowCopy = {};
  for (let key of keys) {
    shallowCopy[key] = obj[key];
  }
  return shallowCopy;
}

function EventModal() {
  const location = useLocation();
  const { loggedInUser } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        localStorage.removeItem('savedEvents')
        alert("Carregando Agenda")
        const response = await api.get("/task/all");
        setTasks(response.data);
        tasks.map((task) => (

          completeCalendar(task.name, task._id, task.priority, new Date(task.deadline).getTime())
        ))
      } catch (error) {
      }
    }
    fetchTasks();
  }, []);



  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  let defaultValues = emptyDefault;

  if (location.state) {
    defaultValues = { ...defaultValues, ...pick(location.state, defaultKeys) };

    if (loggedInUser.user.role === "user") {
      defaultValues.members = [];
    } else {
      defaultValues.members = defaultValues.members.map((user) => user._id);
    }
  }

  const [form, setForm] = useState(defaultValues);
  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {

    e.preventDefault();
    e.stopPropagation();
    completeCalendar();



    async function sendTask() {
      try {
        let response = await api.post("/task/new", form);
        setForm({ ...emptyDefault });
      } catch (error) {
        console.log(error);
      }
    }
    sendTask();
    setShowEventModal(false);
  }

  function completeCalendar(ctitle, cid, clabel, cday) {
    const calendarEvent = {
      title: ctitle,
      idhtml: cid,
      label: clabel,
      day: cday,//daySelected.valueOf(),
      id: Date.now(),
    };

    if (document.getElementById(cid) === null) {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
  }


  return (
    <div>
    </div >




  );
}

export default EventModal;