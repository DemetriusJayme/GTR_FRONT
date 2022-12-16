import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Link } from "react-router-dom";
import api from "../../api/api.js";
import { EyeIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function ListTaskPageUser() {
  let x;
  const [tasks, setTasks] = useState([]);
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/mytask/notassigned");
        setTasks(response.data);
        alert("response")

      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, []);

  /*  async function handleSelect(e, idTask) {
    await api.put(`/task/edit/${idTask}`, { status: e.target.value });
  }

  async function handleDeleteTask(e, idTask) {
    await api.delete(`/task/delete/${idTask}`);
    setReload(!reload);
  }

  async function handleTaskComplete(e, idTask) {
    await api.put(`/task/complete/${idTask}`);
    setReload(!reload);
  } */

  function completeCalendar() {

    const calendarEvent = { 
      title: "title",
      idhtml: "1234",
      label: "alta",
      day: 1670986800000,//daySelected.valueOf(),
      id: Date.now(),
    };
    dispatchCalEvent({ type: "push", payload: calendarEvent });

  }

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h1>All Users</h1>
        </div>
      </div>
      <section className="overflow-auto">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
              placeholder="Search Users"
              required
            />
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Members</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="px-6">{task.name}</td>
                <td className="px-6">
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap w-52">
                    {task.description}
                  </div>
                </td>
                <td className="px-6">{task.status}</td>
                <td className="px-6">{task.priority}</td>
                <td className="px-6 group">
                  {task.members.length}{" "}
                  {task.members.length > 1 ? "members" : "member"}
                </td>
                <td
                  className={`px-6 ${
                    dayjs().isAfter(task.deadline) ? "text-red-600" : ""
                  }`}>
                  {dayjs().to(task.deadline)}
                </td>
                <td className="px-6 flex">
                  <Link to={`../task/${task._id}`} state={task}>
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  </Link>
                 
                  Encerrar
                </td>
                <td>{task._id}</td>
                <td id="p">{new Date(task.deadline).getTime()}</td>
                <td>{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button id="3" onClick={completeCalendar}>Criar Exemplo</button>
      </section>
    </>
  );
}

export default ListTaskPageUser;
