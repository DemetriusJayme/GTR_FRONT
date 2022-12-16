import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import Tags from "../../components/task/Tags";
import DropdownMenu from "../../components/task/MembersDropDownMenu";
import toast from "react-hot-toast";

const emptyDefault = {
  description: "",
  name: "",
  deadline: new Date().toISOString().split("T")[0],
  estimated: "00:30",
  priority: "regular",
  status: "pending",
  // annex: [],
  members: [],
  tags: [],
};

const defaultKeys = Object.keys(emptyDefault);

function pick(obj, keys) {
  let shallowCopy = {};
  for (let key of keys) {
    if (key in obj)
      shallowCopy[key] = obj[key];
  }
  return shallowCopy;
}

function AddTaskPage() {
  const location = useLocation();
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

    async function sendTask() {
      try {
        let response = await api.post("/task/new", form);
        setForm({ ...emptyDefault });
        toast.success(response.data.msg, { duration: 6000 });
        navigate("/task");
      } catch (error) {
        toast.error(error);
      }
    }
    sendTask();
  }

  return (
    <>
      <h1>Create a new task</h1>
      <section className="overflow-visible">
        <form onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-8 gap-2 items-center">
            <div className="md:col-span-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name of the task"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                className="leading-6"
                value={form.priority}
                onChange={handleChange}
              >
                <option value="high">high</option>
                <option value="regular">regular</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="A description of the task"
            value={form.description}
            onChange={handleChange}
          />
          <div className="md:grid md:grid-cols-8 gap-2 items-center">
            <div className="md:col-span-4">
              {loggedInUser.user.role !== "user" && (
                <>
                  <label>Members</label>
                  <DropdownMenu
                    onChange={handleChange}
                    selected={form.members}
                  />
                </>
              )}
            </div>
            <div className="md:col-span-4">
              <Tags onChange={handleChange} selected={form.tags} />{" "}
            </div>
          </div>

          <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
            <div className="w-full">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                className="w-full"
                value={form.deadline}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="estimated">Task's estimated time required</label>
              <input
                type="time"
                name="estimated"
                id="estimated"
                className="w-full"
                value={form.estimated}
                min="00:05"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="area-button">
            <button type="submit" className="btn-blue">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddTaskPage;
