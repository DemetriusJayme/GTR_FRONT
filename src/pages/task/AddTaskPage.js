import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import Tags from "../../components/task/Tags";
import DropdownMenu from "../../components/task/MembersDropDownMenu";

const defautFormValues = {
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

function AddTaskPage() {
  const { loggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState(defautFormValues);

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    async function sendTask() {
      try {
        let response = await api.post("/task/new", form);
        setForm({ ...defautFormValues });
        alert(response.msg);
      } catch (error) {
        console.log(error);
      }
    }
    sendTask();
  }

  return (
    <>
      <h1>Create a new task</h1>
      <section className="overflow-visible">
        <form onSubmit={handleSubmit}>
          <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
            <div className="w-full">
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
            <div className="w-full">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                className="leading-6"
                value={form.priority}
                onChange={handleChange}>
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
            rows={3}
            placeholder="A description of the task"
            value={form.description}
            onChange={handleChange}
          />
          <Tags onChange={handleChange} selected={form.tags} />
          {/* NOT IMPLEMENTED! <Dropzone /> */}

          {loggedInUser.user.role !== "user" && (
            <DropdownMenu onChange={handleChange} />
          )}

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
