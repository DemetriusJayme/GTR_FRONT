import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
//import EditUser from "../../components/EditUser";

function ProfilePage() {
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  console.log(loggedInUser.user._id);
  const [user, setUser] = useState({});
  const [reload, setReload] = useState(false);

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
      <h1>Profile Page</h1>
      <div className="mt-5">
        <div className="align-items-center mb-5">
          <div>
            <div>
              <img src={user.photo} alt="profile Pic" className="rounded" />
            </div>
          </div>
          <div>
            <h1>Nome</h1>
            <h1>{user.name}</h1>
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
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
