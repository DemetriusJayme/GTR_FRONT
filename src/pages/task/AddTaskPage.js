import axios from "axios";
import { useContext, useRef, useState } from "react";
import Tags from "../../components/task/Tags";
import { AuthContext } from "../../contexts/authContext";

function AddTaskPage() {
  const { loggedInUser } = useContext(AuthContext);
  const fileUpload = useRef();
  const [dragOver, setDragOver] = useState(false);
  const [form, setForm] = useState({
    description: "",
    name: "",
    deadline: new Date(),
    estimated: "00:30",
    priority: "regular",
    status: "started",
    annex: [],
    members: [],
    tags: [],
  });

  function handleDrag(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function handleDragOut(e) {
    setDragOver(false);
  }

  function handleDrop(e) {
    fileUpload.current.files = e.dataTransfer.files;
    e.preventDefault();
  }

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

        <label>Annex</label>
        <div
          className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
          onDragOver={handleDrag}
          onDragEnter={handleDrag}
          onDragLeave={handleDragOut}
          onDrop={handleDrop}>
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <label htmlFor="file-upload">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  ref={fileUpload}
                  multiple
                  accept="image/png, image/jpeg,.pdf"
                />
              </label>
              <p>or drag and drop</p>
            </div>

            <p>PDF, PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

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
