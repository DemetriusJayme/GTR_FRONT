import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function NavBar() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div bg="dark" variant="dark" expand="lg">
      <div>
        <div>Enap 92 - WD</div>

        <div id="basic-navbar-nav">
          <nav className="me-auto">
            {/* Se o usuário estiver logado */}
            {loggedInUser && (
              <>
                <Link className="nav-link" to="/">
                  Página inicial
                </Link>
                <Link className="nav-link" to="/profile">
                  Perfil
                </Link>
                <Link className="nav-link" to="/tasks">
                  Minhas Tarefas
                </Link>
                <Link className="nav-link" to="/notificacoes">
                  Notificações
                </Link>
              </>
            )}
            {/* Não está logado */}
            {!loggedInUser && (
              <>
                <Link className="nav-link" to="/">
                  Página inicial
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/sign-up">
                  Cadastre-se
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
