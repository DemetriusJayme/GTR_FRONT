import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { StyledForm, StyledSection } from "../styles";

function HomePage() {
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  return (
    <>
      <h1 className="text-3xl mb-2">DashBoard</h1>
      <StyledSection>
        <StyledForm>
          <button className="mr-2">
            <Link to="/sign-up">Cadastrar no sistema</Link>
          </button>
          <button className="mr-2">
            <Link to="/login">Entrar no sistema</Link>
          </button>
          {loggedInUser && (
            <button className="mr-2">
              <Link to="/profile">Vá para o Perfil</Link>
            </button>
          )}
        </StyledForm>
      </StyledSection>
    </>
  );
}

export default HomePage;
