import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../api/api.js";
import { AuthContext } from "../contexts/authContext";

function LoginPage() {
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      console.log(response);

      //validar se o usuário confirmou o email dele

      //setItem -> coloca algo dentro do localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      //atualizar o contexto
      setLoggedInUser({ ...response.data });

      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error);
    }
  }

  return (
    <>
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
            <h1 className="">Login</h1>

            <form className="" onSubmit={handleSubmit}>
              <label htmlFor="email" className=" text-blue">
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="text-blue2"
                placeholder="your@mail.com"
                required
              />
              <label htmlFor="password" className=" text-blue">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="text-blue2"
                placeholder="..."
                required
              />
              <button
                className="btn-blue border-none hover:bg-orange hover:text-white mt-4 mb-2"
                type="submit"
                //onClick={handleSubmit}
              >
                Enter
              </button>
            </form>
          </div>
          <NavLink key="signUp" to="/signup">
            <div className="p-3 mt-6 w-full cursor-pointer rounded-md bg-orange text-center text-white font-bold hover:bg-blue hover:text-white">
              Create your account
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
