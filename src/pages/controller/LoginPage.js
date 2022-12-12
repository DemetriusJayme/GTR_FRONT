import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import { AuthContext } from "../../contexts/authContext";

import imgHome from "../../assets/images/bg_home.jpeg";

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
    <>
      <div className="md:grid md:grid-cols-2 gap-8  bg-white p-0 md:p-8 rounded-md">
        <section className="m-0 bg-blue2 text-white">
          <h1 className=" text-white">Login</h1>
          <form onSubmit={handleSubmit}>
            <form className=" text-white">
              <label htmlFor="email" className=" text-white">
                Endereço de e-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Insira o endereço de e-mail cadastrado"
                required
              />
              <label htmlFor="password" className=" text-white">
                Senha
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Insira a senha cadastrada"
                required
              />
              <button
                className="btn border-none hover:bg-orange hover:text-white mt-4 mb-2 float-right"
                type="submit"
              >
                Entrar no sistema
              </button>
              <div className=" t text-white mt-4 text-sm font-medium">
                Ainda não possui cadastro?{" "}
                <Link to="/sign-up" className="hover:text-blue text-orange ">
                  Cadastre aqui
                </Link>
              </div>
            </form>
          </form>
        </section>
        <div
          class="bg-cover bg-center  invisible md:visible md:block rounded-lg"
          style={{ backgroundImage: `url(${imgHome})` }}
        ></div>
      </div>
    </>
  );
}

export default LoginPage;
