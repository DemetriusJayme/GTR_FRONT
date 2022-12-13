import { useState } from "react";
import api from "../../api/api.js";

function AddUserPage() {
  const [reload, setReload] = useState(false);
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
      await api.post("/user/create", form);
      setForm({
        name: "",
        email: "",
        password: "",
        confirmEmail: true,
        role: "",
      });
      console.log(form);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <section>
        <form action="#" method="POST">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
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
              <option value="supervisor">Supervisor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="area-button">
            <button type="submit" className="btn-blue" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddUserPage;
