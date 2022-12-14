import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";

function EditUserPage() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const { setLoggedInUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    registration: "",
    name: "",
    password: "",
    admission: "",
    photo: "",
    email: "",
    confirmEmail: "",
    phone: "",
    workHours: "",
    department: "",
    jobPosition: "",
    status: "",
    role: "",
    allocated: "",
    director: "",
    supevisor: "",
    skills: [],
    manager: [],
    team: [],
    report: [],
    tasks: [],
  });
  const [reload, setReload] = useState(false);
  // const status = ["Active", "Vacation", "Inactive"];
  // const role = ["user", "supervisor"];
  //  const allocated = ["true", "false"];

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/userId");
        // const response = await api.get(`/user/${userId}`);
        //console.log(`${userId}`)

        setUser(response.data);
        console.log(response);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [reload]);

  function signOut() {
    //removendo o loggedInUser do localStorage
    localStorage.removeItem("loggedInUser");

    //atualizar o meu context
    setLoggedInUser(null);

    navigate("/");
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  /* 
  function updateTags(tags) {
    handleChange({ target: { name: "skills", value: tags } });
  } */

  async function handleStack(e) {
    //console.log(e.target.checked); -> está clicado ou não
    //console.log(e.target.name); -> qual o nome da tech
    // toda vez que o checkbox é alterado, enviamos essa alteração pra API
    try {
      const clone = { ...user };
      delete clone._id;

      if (e.target.checked === true) {
        clone.stack.push(e.target.name);
      }

      if (e.target.checked === false) {
        const index = clone.stack.indexOf(e.target.name); //acho o index do elemento que eu cliquei
        clone.stack.splice(index, 1); //retiro o elemento da array
      }

      await api.put("/user/edit", clone);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteUser() {
    try {
      await api.delete("/user/delete");
      signOut();
    } catch (error) {
      console.log(error);
      alert("Algo deu errado no delete do user");
    }
  }

  return (
    <div>
      <h1>EDIT USER PAGE VERSÃO SUPERVISOR</h1>
      <section>
        <form action="#" method="POST">
          <label>Photo</label>
          <div className="mt-1 flex items-center">
            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Government Employee Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              value={form.name}
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
            <label
              htmlFor="registration"
              className="block text-sm font-medium text-gray-700"
            >
              Registration
            </label>
            <input
              type="number"
              name="registration"
              id="registration"
              autoComplete="registration"
              value={form.registration}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="phone"
              value={form.phone}
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
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="department" className="">
              Department
            </label>
            <select
              id="department"
              name="department"
              autoComplete="department"
              onChange={handleChange}
              value={form.department}
            >
              <option value="Gestão de Pessoas">Gestão de Pessoas </option>
              <option value="Tecnologia da Informação">
                Tecnologia da Informação
              </option>
              <option value="Contabilidade e Fianças">
                Contabilidade e Fianças
              </option>
              <option value="Compras e Licitações">Compras e Licitações</option>
              <option value="Ouvidoria">Ouvidoria</option>
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="jobPosition" className="">
              Job Position
            </label>
            <select
              id="jobPosition"
              name="jobPosition"
              autoComplete="jobPosition"
              value={form.jobPosition}
              onChange={handleChange}
            >
              <option value="Admin">Admin </option>
              <option value="Analista">Analista </option>
              <option value="Técnico de Atividades Administrativas">
                Técnico de Atividades Administrativas
              </option>
              <option value="Técnico Auxiliar">Técnico Auxiliar</option>
              <option value="Assistente">Assistente</option>
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="workHours"
              className="block text-sm font-medium text-gray-700"
            >
              Work Hours
            </label>
            <input
              type="number"
              name="workHours"
              id="workHours"
              autoComplete="workHours"
              value={form.workHours}
              onChange={handleChange}
            />
          </div>
          <fieldset>
            <legend className="sr-only">status</legend>
            <div className="text-base font-medium text-gray-900">Status</div>
            <div className="mt-4">
              <div className="flex items-start">
                <div>
                  <input id="Active" name="Active" type="checkbox" />
                </div>

                <label htmlFor="Active" className="inner">
                  Active
                </label>
              </div>

              <div className="flex items-start">
                <div>
                  <input id="Vacation" name="Vacation" type="checkbox" />
                </div>

                <label htmlFor="Vacation" className="inner">
                  Vacation
                </label>
              </div>
              <div className="flex items-start">
                <div>
                  <input id="Inactive" name="Inactive" type="checkbox" />
                </div>

                <label htmlFor="Inactive" className="inner">
                  Inactive
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Role</legend>
            <div className="text-base font-medium text-gray-900">Role</div>
            <div className="mt-4">
              <div className="flex items-start">
                <div>
                  <input id="Supervisor" name="Supervisor" type="checkbox" />
                </div>

                <label htmlFor="Supervisor" className="inner">
                  Supervisor
                </label>
              </div>

              <div className="flex items-start">
                <div>
                  <input id="User" name="User" type="checkbox" />
                </div>

                <label htmlFor="User" className="inner">
                  User
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">allocated</legend>
            <div className="text-base font-medium text-gray-900">Allocated</div>
            <div className="mt-4">
              <div className="flex items-start">
                <div>
                  <input
                    id={form.allocated}
                    name={form.allocated}
                    type="checkbox"
                  />
                </div>

                <label htmlFor="Supervisor" className="inner">
                  {form.allocated} "true or false"s
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                autoComplete="skills"
                value={form.skills}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="manager"
                className="block text-sm font-medium text-gray-700"
              >
                Managers
              </label>
              <input
                type="text"
                name="manager"
                id="manager"
                autoComplete="manager"
                value={form.manager}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="team"
                className="block text-sm font-medium text-gray-700"
              >
                Teams
              </label>
              <input
                type="text"
                name="team"
                id="team"
                autoComplete="team"
                value={form.team}
              />
            </div>
          </fieldset>
          <div className="area-button">
            <button type="submit" className="btn-blue">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default EditUserPage;
