import { useState, useEffect, useContext } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import { toast } from "react-hot-toast";

function pick(obj, keys) {
  let shallowCopy = {};
  for (let key of keys) {
    if (key in obj) shallowCopy[key] = obj[key];
  }
  return shallowCopy;
}

function DetailsTask() {
  const { loggedInUser } = useContext(AuthContext);
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(location.state);
  const [firstUpdate, setFirstUpdate] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [reload, setReload] = useState(false);

  /*   
  STEPS
  const [showActivity, setShowActivity] = useState(false);
  const [form, setForm] = useState({
    hours: "00:30",
    comment: "",
  }); */

  useEffect(() => {
    if (task && firstUpdate) {
      setFirstUpdate(false);
      return;
    }

    async function getTask() {
      try {
        let response = await api.get(`/task/${id}`);
        setTask(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  /* 
  STEPS
  function handleShowActivity() {
    setShowActivity(!showActivity);
  }

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/activity/new", { ...form, id });
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
    setForm({
      hours: "00:30",
      comment: "",
    });
  } */

  function handleEditChange({ target: { name, value } }) {
    setEditForm({ ...editForm, [name]: value });
  }

  function toggleEditMode() {
    if (!editMode)
      setEditForm(pick(task, ["name", "priority", "deadline", "description"]));
    setEditMode(!editMode);
  }

  function handleUpdateStatus({ target: { value } }) {
    handleUpdate({ status: value });
  }

  async function handleSave() {
    await handleUpdate(editForm);
    setEditMode(!editMode);
    navigate("/task");
  }

  async function handleUpdate(values) {
    try {
      const clone = { ...values };
      delete clone._id;
      let response = await api.put(`/task/${id}`, clone);
      toast.success(response.data.msg);
      setReload(!reload);
    } catch (error) {
      toast.error(error);
    }
  }

  async function handleDelete() {
    try {
      let response = await api.delete(`/task/${id}`);
      toast.success(response.data.msg);
      navigate("/task");
    } catch (error) {
      toast.error(error);
    }
  }

  if (!task) return <h1>Carregando a tarefa...</h1>;
  return (
    <>
      <section>
        <div className="md:grid md:grid-cols-4 gap-4 p-0  mb-4">
          <div className=" col-span-3">
            {editMode ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <span className="text-orange text-sm">{task.status}</span>
              </>
            ) : (
              <h1 className="mb-0 flex">
                {task.name}
                <span className="text-orange text-sm ml-2">{task.status}</span>
              </h1>
            )}

            <h4 className="author text-sm">
              <span className="font-bold">Author:</span> {task.author.name}
            </h4>
          </div>

          <div>
            <div className="">
              <span className="font-bold">Priority: </span>
              {editMode ? (
                <select
                  name="priority"
                  value={editForm.priority}
                  onChange={handleEditChange}>
                  <option value="high">high</option>
                  <option value="regular">regular</option>
                  <option value="low">low</option>
                </select>
              ) : (
                <span className="tag"> {task.priority}</span>
              )}
            </div>
            {/* codicional cor */}
            <div className="">
              <span className="font-bold">Deadline:</span>{" "}
              {editMode ? (
                <input
                  type="date"
                  name="deadline"
                  value={editForm.deadline}
                  onChange={handleEditChange}
                />
              ) : (
                <span className="font-bold text-orange ">
                  {new Date(task.deadline + "T00:00:00").toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 mb-4 rounded-md">
          <div className=" col-span-3">
            {editMode ? (
              <textarea
                name="description"
                rows={3}
                placeholder="A description of the task"
                value={editForm.description}
                onChange={handleEditChange}
              />
            ) : (
              <p>{task.description}</p>
            )}
          </div>
          <div className=" col-span-1">
            <span className="font-bold">Estimated:</span>{" "}
            <span>{task.estimated}h</span>
          </div>
        </div>
        <hr className="mb-0 mt-2" />
        <div className="md:grid md:grid-cols-2 mb-4 gap-4 pt-0 bg-white p-0 rounded-md">
          <div>
            {task.members.length > 0 && (
              <ul className="members">
                <p className="mb-1 font-bold text-md text-blue">Members:</p>
                {task.members.map((member) => (
                  <li className="ml-2" key={member._id}>
                    {member.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            {task.tags.length > 0 && (
              <ul className="tags">
                <p className="mb-1 font-bold text-md text-blue">Tags:</p>
                {task.tags.map((tag) => (
                  <li className="tag" key={crypto.randomUUID()}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      {/* <section>
        <h3 className="">Steps</h3>
        {task.activities.length > 0 && (
          <ul>
            {task.activities.map((activity) => (
              <li>
                {activity.author}
                {activity.hours}
                {activity.comment}
                <button>X</button>
              </li>
            ))}
          </ul>
        )}
        {!showActivity && (
          <button className="btn-blue" onClick={handleShowActivity}>
            + Add
          </button>
        )}
        {showActivity && (
          <form onSubmit={handleSubmit} className="shadow mt-2 px-2 pb-2">
            <div className="flex md:justify-end">
              <div>
                <label htmlFor="hours">Hours taken:</label>
                <input
                  type="time"
                  name="hours"
                  id="hours"
                  value={form.hours}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="-mt-2">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                id="comment"
                value={form.comment}
                onChange={handleChange}
                cols="30"
                rows="5"></textarea>
            </div>

            <div className="mt-1">
              <button type="submit" className="btn-blue">
                Submit
              </button>
            </div>
          </form>
        )}
      </section> */}
      <section className="flex justify-end items-right bg-gray-100 p-2  mt-4">
        <div className="flex justify-center gap-2 items-center">
          {loggedInUser.user.role === "user" && task.status === "pending" && (
            <>
              <button
                className="btn mt-0"
                onClick={handleUpdateStatus}
                value="active">
                ACCEPT
              </button>
              <button
                className="btn mt-0"
                onClick={handleUpdateStatus}
                value="rejected">
                REJECT
              </button>
            </>
          )}
          {editMode ? (
            <>
              <button className="btn mt-0" onClick={toggleEditMode}>
                Cancel
              </button>
              <button className="btn mt-0" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <button className="btn mt-0" onClick={toggleEditMode}>
                EDIT
              </button>
              {task.status === "done" || task.status === "archive" ? (
                <button
                  className="btn mt-0"
                  onClick={handleUpdateStatus}
                  value="active">
                  ACTIVE
                </button>
              ) : (
                <button
                  className="btn mt-0"
                  onClick={handleUpdateStatus}
                  value="done">
                  DONE
                </button>
              )}
              {task.status !== "archive" && (
                <button
                  className="btn mt-0"
                  onClick={handleUpdateStatus}
                  value="archive">
                  ARCHIVE
                </button>
              )}
              {loggedInUser.user.role !== "user" && (
                <button className="btn mt-0" onClick={handleDelete}>
                  DELETE
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default DetailsTask;
