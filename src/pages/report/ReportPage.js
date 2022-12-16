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
      {/* Se o usuário for USER, mostra os relatórios */}
      {!isLoading && loggedInUser.user.role === "user" && (
        <section>
          <h3>My Reports</h3>
          {reports.map((report) => {
            return (
              <div>
                <h3>Supervisor: {report.avaliador.email}</h3>
                <p>Month: {report.refPeriod}</p>
                <p>Created in: {report.reportDate}</p>
                <h4>Item</h4>
                {report.factors.map((factor) => {
                  return (
                    <div>
                      <p>Topic: {factor.item}</p>
                      <p>Score: {factor.score}</p>
                      <p>Notes: {factor.note}</p>
                    </div>
                  );
                })}
                <p>General description: {report.comments}</p>
              </div>
            );
          })}
        </section>
      )}

      {/* Se o usuário for um supervisor, mostra o form para fazer um report */}
      {!isLoading && loggedInUser.user.role === "supervisor" && (
        <section>
          <h3>New Report</h3>
          <form>
            <div className="align-items-center mb-5 md:grid md:grid-cols-12 gap-8">
              <div className=" md:col-span-6">
                <label>Employer</label>
                <select onChange={handleChange} name="avaliado">
                  <option>Choice one</option>
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
              </div>
              <div className=" md:col-span-3">
                <label>Year</label>
                <input
                  type="number"
                  onChange={handleChange}
                  name="year"
                  value={form.year}
                />
              </div>
              <div className=" md:col-span-3">
                <label>Month</label>
                <select onChange={handleChange} name="refPeriod">
                  <option>Choice one</option>
                  {mes.map((mes) => {
                    return <option value={mes}>{mes}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="align-items-center mb-5 md:grid md:grid-cols-12 gap-8 bg-gray-100 p-2 rounded-md">
              <div className=" md:col-span-5">
                <label className="m-0 font-bold">Item</label>
                <select onChange={handleFactor} name="item">
                  <option>Choice Item</option>
                  {fatores.map((fator) => {
                    return <option value={fator}>{fator}</option>;
                  })}
                </select>
              </div>

              {showFactor && (
                <>
                  <div className=" md:col-span-2">
                    <label className="m-0">Score</label>
                    <input
                      type="number"
                      min={0}
                      max={10}
                      name="score"
                      value={factor.score}
                      onChange={handleFactor}
                      className="w-14"
                    />
                  </div>
                  <div className=" md:col-span-5">
                    <label className="m-0">OBS:</label>
                    <input
                      type="text"
                      name="note"
                      value={factor.note}
                      onChange={handleFactor}
                    />
                    <div className="flex justify-end mt-2 mb-2">
                      <button
                        type="button"
                        className="ml-2 btn-blue"
                        onClick={handleSubmitFactor}
                      >
                        Save Item
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* se houver algo dentro da array de factores, mostrar */}
            <div className="flex gap-2 flex-wrap">
              {form.factors.length > 0 &&
                form.factors.map((factor, index) => {
                  return (
                    <div className=" bg-gray-50 rounded-md p-4">
                      <div>
                        <span className="font-bold">Item:</span> {factor.item}
                      </div>
                      <div>
                        <span className="font-bold">Score:</span> {factor.score}
                      </div>
                      <div>
                        <span className="font-bold">Notes: </span> {factor.note}
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="ml-2 btn-blue"
                          onClick={() => handleDeleteFactor(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <label className="font-bold">Final comments</label>
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
            ></textarea>

            <button
              type="button"
              className="ml-2 btn-blue mt-2"
              onClick={handleSubmit}
            >
              Save Report
            </button>
          </form>

          {/* Todos os reports enviados por mim */}
        </section>
      )}
      <section>
        <h3>Latest Report</h3>
        <div className="align-items-center mb-5 md:grid md:grid-cols-12 gap-8">
          {avaliacoes.map((av) => {
            return (
              <div className=" md:col-span-6 bg-gray-50 rounded-md p-4">
                <div>
                  <span className="font-bold text-blue">Report:</span>{" "}
                  {av.avaliado.email}{" "}
                </div>
                <div>
                  <span className="font-bold text-blue">Date of Rated:</span>{" "}
                  {av.reportDate.slice(0, 10)}
                </div>
                <div>
                  <span className="font-bold text-blue">Month</span>:{" "}
                  {av.refPeriod}
                </div>
                <div>
                  <span className="font-bold text-blue">Item:</span>
                </div>
                {av.factors.map((factor) => {
                  return (
                    <div className=" bg-gray-100 mt-1 mb-1 p-2">
                      <div>
                        <span className="font-bold">{factor.item}: </span>
                        <span className="text-orange font-bold">
                          Total {factor.score}
                        </span>
                      </div>
                      <div></div>
                      <div>Note: {factor.note}</div>
                    </div>
                  );
                })}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="ml-2 btn-blue"
                    onClick={(e) => handleDeleteReport(e, av._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ReportPage;
