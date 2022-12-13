import axios from "axios";
import { useContext, useRef, useState } from "react";
import Tags from "../../components/task/Tags";
import { AuthContext } from "../../contexts/authContext";
import DropdownMenu from "../../components/DropdownMenu";

function AddTaskPage() {
  const { loggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    description: "",
    name: "",
    deadline: new Date(),
    estimated: "00:30",
    priority: "regular",
    status: "started",
    // annex: [],
    members: [],
    tags: [],
  });

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(form);
  }

  return (
    <>
      <h1>Create a new task</h1>

      <form onSubmit={handleSubmit}>
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

        <DropdownMenu
          label="Members"
          name="members"
          list={{ "fulano 123": 123456 }}
          onChange={handleChange}
        />

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700">
            Model - Input (Type:Text)
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
          />
        </div>

        <div className="col-span-6 sm:col-span-4">
          <label htmlFor="email-address" className="">
            Model - Input (Type:Email)
          </label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="country" className="">
            Model - Select
          </label>
          <select id="country" name="country" autoComplete="country-name">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <fieldset>
          <legend className="sr-only">By Email</legend>
          <div className="text-base font-medium text-gray-900">By Email</div>
          <div className="mt-4">
            <div className="flex items-start">
              <div>
                <input id="comments" name="comments" type="checkbox" />
              </div>

              <label htmlFor="comments" className="inner">
                Comments
              </label>
            </div>
            <div className="flex items-start">
              <div>
                <input id="candidates" name="candidates" type="checkbox" />
              </div>

              <label htmlFor="candidates" className="inner">
                Candidates
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
              />
              <label htmlFor="push-everything" className="inner">
                Everything
              </label>
            </div>
            <div className="flex items-center">
              <input id="push-email" name="push-notifications" type="radio" />
              <label htmlFor="push-email" className="inner">
                Same as email
              </label>
            </div>
          </div>
        </fieldset>

        <div className="area-button">
          <button type="submit" className="btn-blue">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTaskPage;
