import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.js";
import {
  EyeIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

// https://stackoverflow.com/a/37511463
function removeAccents(string) {
  return string.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function filterByKeys(obj, keys, search) {
  if (!search.length || !obj) return true;
  search = removeAccents(search).toLowerCase();

  for (let key of keys) {
    let values = obj[key];

    // eslint-disable-next-line eqeqeq
    if (values == undefined) return false;
    if (typeof values === "string") values = [values];
    if (!Array.isArray(values))
      throw Error(
        "Não é possível filtar, pois um dos valores recebidos é de tipo diverso de array e string"
      );

    for (let str of values) {
      if (removeAccents(str.toLowerCase()).includes(search)) return true;
    }
  }

  return false;
}

function ListTaskPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("active");

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/task/all");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, []);

  function handleFilterByStatus({ target: { value } }) {
    setFilterByStatus(value);
  }

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

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h1>All Tasks</h1>
        </div>
      </div>
      <section className="overflow-auto">
        <div className="flex">
          <div className="grow">
            <div className="relative w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
                placeholder="Search"
                onChange={handleFilter}
                required
              />
            </div>
            <select
              value={filterByStatus}
              onChange={handleFilterByStatus}
              className="w-max pr-7 mt-0">
              <option value="active">active</option>
              <option value="rejected">rejected</option>
              <option value="pending">pending</option>
              <option value="done">done</option>
              <option value="archived">archived</option>
              <option value="started">started</option>
            </select>
          </div>

          <Link to="/task/new">
            <button className="btn-blue">+ New Task</button>
          </Link>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Members</th>
                <th>Deadline</th>
                <th>Copy</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter((task) =>
                  filterByKeys(task, ["status"], filterByStatus)
                )
                .filter(
                  (task) =>
                    filterByKeys(task, ["name", "description"], filter) ||
                    task.members.some((member) =>
                      filterByKeys(member, ["name"], filter)
                    )
                )
                .map((task) => (
                  <tr key={task._id}>
                    <td className="px-6">{task.name}</td>
                    <td className="px-6">
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap w-52">
                        {task.description}
                      </div>
                    </td>
                    <td className="px-6">{task.status}</td>
                    <td className="px-6">{task.priority}</td>
                    <td className="px-6">
                      <ul className="flex flex-wrap w-72">
                        {task.members.map((member) => (
                          <li
                            className="whitespace-nowrap tag"
                            key={member._id}>
                            {member.name}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td
                      className={`px-6 ${
                        dayjs().isAfter(task.deadline) ? "text-red-600" : ""
                      }`}>
                      {dayjs().to(task.deadline)}
                    </td>
                    <td className="px-6">
                      <Link to="./new" state={task}>
                        <DocumentDuplicateIcon className="h-5 w-5 text-gray-500" />
                      </Link>
                    </td>
                    <td className="px-6">
                      <Link to={`./${task._id}`} state={task}>
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default ListTaskPage;
