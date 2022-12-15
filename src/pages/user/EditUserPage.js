import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";

function EditUserPage() {
  const { loggedInUser } = useContext(AuthContext);
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
        const response = await api.get(`/user/one/${userId}`);

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

      await api.put(`/user/edit/${userId}`, clone);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);

  async function handleDeleteUser() {
    try {
      await api.delete("/user/delete");
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
          <label>{user.name}</label>
          <p>{user.registration}</p>
          <p>{user.jobPosition}</p>
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
          </fieldset>
          <div className="area-button">
            <button
              type="submit"
              className="btn-blue"
              onClick={() => navigate("/user/:userId")}
            >
              Previos
            </button>
            <button type="submit" className="btn-blue" onClick={handleSubmit}>
              Save
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
        </form>
      </section>
    </div>
  );
}

export default EditUserPage;
