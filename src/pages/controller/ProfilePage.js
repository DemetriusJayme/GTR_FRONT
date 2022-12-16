import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import {
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";

function ProfilePage() {
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  console.log(loggedInUser.user._id);
  const [user, setUser] = useState({});
  const [reload, setReload] = useState(false);
  console.log(setReload);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
      } catch (error) {
        //console.log(error);
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

  return (
    <div>
      <h1>Your profile</h1>
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
          <section>
            <form action="#" method="POST">
              <div className="area-button">
                <button
                  type="submit"
                  className="btn-blue"
                  onClick={() =>
                    navigate(`/edit-user/${loggedInUser.user._id}`)
                  }
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn-blue"
                  onClick={() => navigate("/users")}
                >
                  My Team
                </button>
                <button
                  type="submit"
                  className="btn-blue"
                  onClick={() => navigate("/task/:id")}
                >
                  My Tasks
                </button>
                <button
                  type="submit"
                  className="btn-blue"
                  onClick={() => navigate("/report")}
                >
                  My Reports
                </button>

                <button type="submit" className="btn-blue" onClick={signOut}>
                  Log-Out
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
