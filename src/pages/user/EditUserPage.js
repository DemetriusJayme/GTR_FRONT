import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";

function EditUserPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);

  const { loggedInUser } = useContext(AuthContext);
  //const { setLoggedInUser } = useContext(AuthContext);

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
        const response = await api.get(`/user/${userId}`);
        console.log(response.data);
        setUser(response.data);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [reload, userId]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* 
  function updateTags(tags) {
    handleChange({ target: { name: "skills", value: tags } });
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      //clonando o form para que possamos fazer as alterações necessárias
      const clone = { ...form };
      delete clone._id;

      await api.put("/user/edit", clone);
      setReload(!reload);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSubmitSuperv(e) {
    e.preventDefault();
    try {
      //clonando o form para que possamos fazer as alterações necessárias
      const clone = { ...form };
      delete clone._id;

      await api.put(`/user/edit/${userId}`, clone);
      setReload(!reload);
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteUser() {
    try {
      console.log("estou no handledelete");

      await api.delete(`/user/delete/${userId}`);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      alert("Algo deu errado no delete do user");
    }
  }

  return (
    <div>
      <h1>EDIT</h1>
      <section>
        <div>
          <label>{user.name}</label>
          <p>{user.registration}</p>
          <p>{user.email}</p>

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
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Enter the full name"
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
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Work Hours
            </label>
            <input
              type="number"
              name="workHours"
              placeholder="Type the Work hours"
              id="workHours"
              value={form.workHours}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="phone"
              placeholder="Enter the full phone"
              value={form.phone}
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
            <label htmlFor="department" className="">
              Job Position
            </label>
            <select
              id="jobPosition"
              name="jobPosition"
              autoComplete="jobPosition"
              onChange={handleChange}
              value={form.jobPosition}
            >
              <option value="Analista">Analista </option>
              <option value="Técnico de Atividades Administrativas">
                Técnico de Atividades Administrativas
              </option>
              <option value="Auxiliar Técnico">Auxiliar Técnico</option>
              <option value="Tecnólogo">Tecnólogo</option>
              <option value="Assitente">Assitente</option>
            </select>
          </div>

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
                selected={form.skills}
              />
            </div>
          </fieldset>
          <div className="area-button">
            {loggedInUser.user.role === "user" && (
              <button type="submit" className="btn-blue" onClick={handleSubmit}>
                Save
              </button>
            )}

            {loggedInUser.user.role !== "user" && (
              <button
                type="submit"
                className="btn-blue"
                onClick={handleSubmitSuperv}
              >
                Save
              </button>
            )}
            <button
              type="submit"
              className="btn-blue"
              onClick={() => navigate("/users")}
            >
              Cancel
            </button>
            {loggedInUser.user.role !== "user" && (
              <button
                type="submit"
                className="btn-blue"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditUserPage;
