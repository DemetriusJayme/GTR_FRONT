import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import {
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";

function DetailsUserPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [reload, setReload] = useState(false);

  const { loggedInUser } = useContext(AuthContext);
  const [user, setUser] = useState({});

  /* const [form, setForm] = useState({
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
  }); */

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        //console.log(error);
      }
    }
    console.log(user);
    fetchUser();
  }, [reload, userId]);

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h1>Details</h1>
        </div>
      </div>

      <section className="mt-5">
        <div className="align-items-center mb-5 md:grid md:grid-cols-12 gap-8">
          <div className=" md:col-span-3">
            <div className=" rounded-md w-full">
              <img src={user.photo} alt="profile Pic" className="rounded-md" />
            </div>
          </div>
          <div className="md:col-span-4 text-blue p-4 bg-gray-50 rounded-md">
            <div>
              <span className=" font-bold">Department:</span> {user.department}
            </div>
            <div>
              <span className=" font-bold">JobPosition:</span>{" "}
              {user.jobPosition}
            </div>

            <div>
              <span className=" font-bold">Status:</span> {user.status}
            </div>
            <div>
              <span className=" font-bold">Role:</span> {user.role}
            </div>
            <div>
              <span className=" font-bold">Skills:</span>
              <ul>
                <li>{user.skills}</li>
              </ul>
            </div>
          </div>
          <div className=" md:col-span-5 text-blue p-4 bg-gray-50 rounded-md">
            <h1>{user.name}</h1>

            <div className="flex items-center">
              <EnvelopeIcon className="h-4 w-4 mr-2" /> {user.email}
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-4 w-4 mr-2" /> {user.phone}
            </div>
            <div className="flex items-center">
              <IdentificationIcon className="h-4 w-4 mr-2" />{" "}
              {user.registration}
            </div>
            <div className="flex items-center">
              <BriefcaseIcon className="h-4 w-4 mr-2" /> {user.workHours}h
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex gap-2 justify-end">
              <button
                type="submit"
                className="btn-blue"
                onClick={() => navigate(`/edit-user/${loggedInUser.user._id}`)}>
                Edit
              </button>
              <button
                type="submit"
                className="btn-blue"
                onClick={() => navigate("/users")}>
                My Team
              </button>
              <button
                type="submit"
                className="btn-blue"
                onClick={() => navigate("/task")}>
                My Tasks
              </button>
              <button
                type="submit"
                className="btn-blue"
                onClick={() => navigate("/report")}>
                My Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div class="card">
            <fieldset>
              <div class="card-header">{user.name}</div>
              {user.registration}
            </fieldset>
            <div class="card-body">
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              </div>
              <fieldset>
                <p>E-mail</p>
                <p>{user.email}</p>
                <p>Registration</p>
                <p>{user.registration}</p>
                <p>phone</p>
                <p>{user.phone}</p>
                <p>workHours</p>
                <p>{user.workHours}</p>
                <p>department</p>

                <p>{user.department}</p>
                <p>jobPosition</p>
                <p>{user.jobPosition}</p>
                <p>skills</p>
                <p>{user.skills}</p>
                <p>status</p>
                <p>{user.status}</p>
                <p>role</p>
                <p>{user.role}</p>
              </fieldset>
            </div>
            <div className="area-button">
              <button type="submit" className="btn-blue">
                <Link
                  to={`/edit-user/${user._id}`}
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="links">
                  Edit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="area-button">
            <button
              type="submit"
              className="btn-blue"
              onClick={() => navigate("/users")}>
              Previos
            </button>
            <button
              type="submit"
              className="btn-blue"
              onClick={() => navigate("/")}>
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailsUserPage;
