import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function HomePage() {
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  return (
    <>
      <button>
        <Link className="nav-link" to="/sign-up">
          Cadastrar no sistema
        </Link>
      </button>
      <button>
        <Link className="nav-link" to="/login">
          Entrar no sistema
        </Link>
      </button>
      {loggedInUser && (
        <button>
          <Link className="nav-link" to="/profile">
            Vá para o Perfil
          </Link>
        </button>
      )}
    </>
  );
}

export default HomePage;
