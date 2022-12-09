import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api.js";
import { AuthContext } from "../contexts/authContext";

function LoginPage() {
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", form);

      //validar se o usuário confirmou o email dele

      //setItem -> coloca algo dentro do localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      //atualizar o contexto
      setLoggedInUser({ ...response.data });

      /*  if (response.data.user.role === "ADMIN") {
            navigate("/admin")
        } */

      navigate("/profile");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        alert("Por favor, ative seu email antes do login");
        return;
      }
    }
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <div onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label>Endereço de e-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Insira o endereço de e-mail cadastrado"
          />
        </div>

        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Insira a senha cadastrada"
          />
        </div>
        <button className="my-3" variant="dark" type="submit">
          Entrar no sistema
        </button>
      </div>
      <div>
        Ainda não possui cadastro? Faça já o
        <Link
          className="text-warning fw-bold text-decoration-none"
          to="/sign-up"
        >
          {" "}
          cadastro
        </Link>
        .
      </div>
    </div>
  );
}

export default LoginPage;
