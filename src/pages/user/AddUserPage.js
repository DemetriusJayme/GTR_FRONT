import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import api from "../../api/api.js";

function AddUserPage() {
  const { loggedInUser } = useContext(AuthContext);

  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmEmail: true,
    role: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await api.post("/user/create", form);
      navigate("/profile", { state: { user: response.data } });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h1>Create New User</h1>
        </div>
      </div>
      <section className=" md:w-3/6">
        <form action="#" method="POST">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter the full name"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email" className="">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type the e-mail"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type the password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="role" className="">
              Role
            </label>
            <select name="role" onChange={handleChange} value={form.role}>
              <option>Select an option</option>
              <option value="supervisor">Supervisor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex mt-4 justify-end">
            <button type="submit" className="btn-blue" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddUserPage;
