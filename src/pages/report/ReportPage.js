import { useEffect, useState, useContext } from "react";
import api from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

function ReportPage() {
  const { loggedInUser } = useContext(AuthContext);

  /* toggles */
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [showFactor, setShowFactor] = useState(false);

  /* informações que vão vir da API */
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);

  /* forms */
  const [factor, setFactor] = useState({
    item: "",
    score: 0,
    note: "",
  });
  const [form, setForm] = useState({
    avaliado: "",
    refPeriod: "",
    year: 2022,
    factors: [],
    comments: "",
  });

  /* Informações que vão dentro dos selects */
  const mes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const fatores = [
    "Communication and delivery of information",
    "Commitment to the organizational's norms and culture",
    "Delivery of results",
    "Individual skills and behaviors",
    "Proactivity",
    "Self-management",
    "Engagement in tasks and activities",
    "Deadline accomplishments",
  ];

  useEffect(() => {
    if (loggedInUser.user.role === "user") {
      async function fetchReports() {
        const response = await api.get("/report/avaliado");
        setReports(response.data);
        setIsLoading(false);
      }

      fetchReports();
    }

    if (loggedInUser.user.role === "supervisor") {
      async function fetchReports() {
        const responseUsers = await api.get("/user/all");
        const responseReports = await api.get("report/avaliador");
        setUsers(responseUsers.data);
        setAvaliacoes(responseReports.data);
        setIsLoading(false);
      }

      fetchReports();
    }
  }, [reload]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFactor(e) {
    setShowFactor(true);
    setFactor({ ...factor, [e.target.name]: e.target.value });
  }

  function handleSubmitFactor(e) {
    setForm({ ...form, factors: [...form.factors, factor] });
    setFactor({ item: "", score: 0, note: "" });
    setShowFactor(false);
  }

  function handleDeleteFactor(index) {
    const clone = { ...form };
    clone.factors.splice(index, 1);
    setForm(clone);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/report/create-report", form);
      setForm({
        avaliado: "",
        refPeriod: "",
        year: 2022,
        factors: [],
        comments: "",
      });
      setFactor({ item: "", score: 0, note: "" });
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteReport(e, id) {
    e.preventDefault();
    try {
      await api.delete(`/report/delete/${id}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Report Page</h1>
      {/* Se o usuário for USER, mostra os relatórios */}
      {!isLoading && loggedInUser.user.role === "user" && (
        <>
          <h2>Meus Reports</h2>
          {reports.map((report) => {
            return (
              <div>
                <h3>Avaliador: {report.avaliador.email}</h3>
                <p>Mês: {report.refPeriod}</p>
                <p>Criado: {report.reportDate}</p>
                <h4>Fatores</h4>
                {report.factors.map((factor) => {
                  return (
                    <div>
                      <p>Fator: {factor.item}</p>
                      <p>Nota: {factor.score}</p>
                      <p>Obs: {factor.note}</p>
                    </div>
                  );
                })}
                <p>Comentário Geral: {report.comments}</p>
              </div>
            );
          })}
        </>
      )}

      {/* Se o usuário for um supervisor, mostra o form para fazer um report */}
      {!isLoading && loggedInUser.user.role === "supervisor" && (
        <>
          <h2>Criar report</h2>
          <form>
            <label>Funcionário</label>
            <select onChange={handleChange} name="avaliado">
              <option>Escolha um colaborador</option>
              {users.map((user) => {
                if (user._id === loggedInUser.user._id) {
                  return null;
                }
                if (user.role === "admin") {
                  return null;
                }
                if (user.role === "supervisor") {
                  return null;
                }
                return <option value={user._id}>{user.email}</option>;
              })}
            </select>

            <label>Ano</label>
            <input
              type="number"
              onChange={handleChange}
              name="year"
              value={form.year}
            />

            <label>Mês</label>
            <select onChange={handleChange} name="refPeriod">
              <option>Escolha um mês</option>
              {mes.map((mes) => {
                return <option value={mes}>{mes}</option>;
              })}
            </select>

            <label>Fatores</label>
            <select onChange={handleFactor} name="item">
              <option>Escolha um fator</option>
              {fatores.map((fator) => {
                return <option value={fator}>{fator}</option>;
              })}
            </select>
            {showFactor && (
              <>
                <label>Nota</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  name="score"
                  value={factor.score}
                  onChange={handleFactor}
                />

                <label>Observação</label>
                <input
                  type="text"
                  name="note"
                  value={factor.note}
                  onChange={handleFactor}
                />

                <button
                  type="button"
                  className="ml-2 btn-blue"
                  onClick={handleSubmitFactor}
                >
                  Salvar fator
                </button>
              </>
            )}

            {/* se houver algo dentro da array de factores, mostrar */}
            {form.factors.length > 0 &&
              form.factors.map((factor, index) => {
                return (
                  <div>
                    <p>Fator: {factor.item}</p>
                    <p>Nota: {factor.score}</p>
                    <p>Observação: {factor.note}</p>
                    <button
                      type="button"
                      className="ml-2 btn-blue"
                      onClick={() => handleDeleteFactor(index)}
                    >
                      Apagar
                    </button>
                  </div>
                );
              })}

            <label>Comentários finais</label>
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
            ></textarea>
            <button
              type="button"
              className="ml-2 btn-blue"
              onClick={handleSubmit}
            >
              Salvar Report
            </button>
          </form>

          {/* Todos os reports enviados por mim */}
          <h2>Reports enviados por mim</h2>
          {avaliacoes.map((av) => {
            return (
              <div>
                <h3>Avaliado: {av.avaliado.email}</h3>
                <p>Data da Avaliação: {av.reportDate.slice(0, 10)}</p>
                <p>Mês: {av.refPeriod}</p>
                <p>Fatores:</p>
                {av.factors.map((factor) => {
                  return (
                    <div>
                      <p>Fator: {factor.item}</p>
                      <p>Nota: {factor.score}</p>
                      <p>Obs: {factor.note}</p>
                    </div>
                  );
                })}
                <button
                  type="button"
                  className="ml-2 btn-blue"
                  onClick={(e) => handleDeleteReport(e, av._id)}
                >
                  Excluir Report
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ReportPage;
