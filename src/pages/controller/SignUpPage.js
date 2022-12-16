import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import api from "../../api/api.js";

function AddUserPage() {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
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
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/user/sign-up", form);
      navigate("/");
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
      <div className="md:grid md:grid-cols-12 gap-4 mt-20">
        <div className="md:col-span-1"></div>
        <section className="md:col-span-7">
          <h1 className="mb-4 text-4xl">
            Every day remote work
            <br />
            becomes more common,
            <br />
            thanks to advances in technology.
          </h1>
          <p className="mb-4">
            While the option to work from home is a huge benefit, it's important
            that you and your team have the right software tool to ensure your
            company's goals are met. This is especially necessary when we are
            talking about working on multiple projects, which involve different
            stakeholders. Working from home can make it more difficult to keep
            everyone aware, organized and engaged in what needs to be done.
          </p>
          <h3 className="mb-4">
            With GTR you will be able to do all this and have all the management
            of <br />
            your projects under development just a few clicks away!
          </h3>
          <p className="mb-4">
            This means that even if you're managing your teams remotely, you'll
            be able to know which tasks are being assigned to whom, what time is
            being spent starting and finishing them, among many other pieces of
            information that will make your life easier and ensure the health of
            your team. your company.
          </p>
        </section>
        <div className="md:col-span-3">
          <div className=" bg-gray-100 p-8 rounded-md">
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
              <div className="mt-2 flex justify-end ">
                <button
                  type="submit"
                  className="p-3 mt-6 cursor-pointer rounded-md bg-orange text-center text-white font-bold hover:bg-blue hover:text-white"
                  onClick={handleSubmit}>
                  Create your account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserPage;
