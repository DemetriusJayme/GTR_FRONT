import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function HomePage() {
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <button className="p-4 me-4" variant="dark" size="lg">
        <Link className="nav-link" to="/sign-up">
          Cadastrar no sistema
        </Link>
      </button>
      <button className="p-4" variant="dark" size="lg">
        <Link className="nav-link" to="/login">
          Entrar no sistema
        </Link>
      </button>

      {loggedInUser && (
        <button className="p-4 ms-4" variant="dark" size="lg">
          <Link className="nav-link" to="/profile">
            Vá para o Perfil
          </Link>
        </button>
      )}
    </div>
  );
}

export default HomePage;
