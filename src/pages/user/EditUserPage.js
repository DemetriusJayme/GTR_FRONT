import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";

import {
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/20/solid";

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
  const [img, setImg] = useState();

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

  function handleImage(e) {
    //console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  }
  async function handleUpload(e) {
    try {
      const uploadData = new FormData();
      uploadData.append("file", img);

      const response = await api.post("/fileUpload/upload", uploadData);

      console.log(uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }
  /* 
  function updateTags(tags) {
    handleChange({ target: { name: "skills", value: tags } });
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    const imgURL = await handleUpload();
    try {
      //clonando o form para que possamos fazer as alterações necessárias
      const clone = { ...form };
      delete clone._id;

      await api.put("/user/edit", { clone, photo: imgURL });
      setReload(!reload);
      navigate("/home");
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
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Algo deu errado no delete do user");
    }
  }

  return (
    <div>
      <div className="min-w-0 flex-1 ">
        <h3>
          Welcome to the <span className="text-orange">{user.name}</span> Edit
          Page
        </h3>
      </div>
      <div className="md:flex md:mt-0 flex-col   bg-gray-50 rounded-md p-4 text-sm text-blue2  ">
        <div className="mb-1 font-bold">About you:</div>

        <div className="flex items-center">
          <EnvelopeIcon className="h-4 w-4 mr-2" /> {user.email}
        </div>
        <div className="flex items-center">
          <PhoneIcon className="h-4 w-4 mr-2" /> {user.phone}
        </div>
        <div className="flex items-center">
          <IdentificationIcon className="h-4 w-4 mr-2" /> {user.registration}
        </div>
      </div>
      <section>
        <div>
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
          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>

          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <label htmlFor="file-upload">
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={handleImage}
                />
              </label>
            </div>
          </div>
          <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
            <div className="w-full">
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
            <div className="w-full">
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
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Work Hours
              </label>
              <input
                type="number"
                name="workHours"
                id="workHours"
                value={form.workHours}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Time Zone
              </label>
              <input
                type="number"
                name="timezone"
                id="timezone"
                autoComplete="timezone"
                value={form.timezone}
                onChange={handleChange}
              />
            </div>
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

          <div className="area-button">
            {loggedInUser.user.role === "user" && (
              <button type="submit" className="btn-blue" onClick={handleSubmit}>
                Save
              </button>
            )}

            {loggedInUser.user.email === "karen@email.com" && (
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
              onClick={() => navigate("/home")}
            >
              Cancel
            </button>
            {loggedInUser.user.email === "karen@email.com" && (
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
