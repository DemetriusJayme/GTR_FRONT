import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import EditUser from "../../components/EditUser";

function DetailsUserPage() {
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    name: "",
  });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
        setForm({ name: response.data.name });
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
      <h1>Details User</h1>
      <div className="mt-5">
        <div className="align-items-center mb-5">
          <div>
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
          <div>
            <img src={user.profilePic} alt="profile Pic" className="rounded" />
          </div>
        </div>

        <div>
          <div>
            <EditUser
              form={form}
              setForm={setForm}
              setReload={setReload}
              reload={reload}
            />
          </div>
          <div>
            <button variant="danger" onClick={handleDeleteUser}>
              Excluir perfil
            </button>
          </div>
          <div>
            <button variant="dark" onClick={signOut}>
              Sign Out
            </button>
          </div>
          <div>
            <Link to="/tasks">
              <button variant="dark">Minhas Tarefas</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsUserPage;
