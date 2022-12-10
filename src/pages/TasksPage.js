import { useState, useEffect } from "react";
import api from "../api/api";

function TasksPage() {
  const [form, setForm] = useState({
    details: "",
    dateFin: "",
  });
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/task/my-tasks");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, [reload]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/task/create-task", form);
      setReload(!reload);
      setForm({
        details: "",
        dateFin: "",
      });
    } catch (error) {
      console.log(error);
      alert("Algo deu errado na criação da task");
    }
  }

  async function handleSelect(e, idTask) {
    await api.put(`/task/edit/${idTask}`, { status: e.target.value });
  }

  async function handleDeleteTask(e, idTask) {
    await api.delete(`/task/delete/${idTask}`);
    setReload(!reload);
  }

  async function handleTaskComplete(e, idTask) {
    await api.put(`/task/complete/${idTask}`);
    setReload(!reload);
  }

  console.log(tasks);

  return (
    <div>
      <div className="border rounded mt-3">
        <div>
          <div className="mt-3">
            <label htmlFor="detais">Tarefa</label>
            <input
              id="detais"
              type="text"
              placeholder="Escreva sua tarefa"
              name="details"
              value={form.details}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="dateFin">Data de Finalização</label>
            <input
              id="dateFIn"
              type="date"
              name="dateFin"
              value={form.dateFin}
              onChange={handleChange}
            />
          </div>
          <button variant="primary" className="m-3" onClick={handleSubmit}>
            Salvar Tarefa
          </button>
        </div>
      </div>

      <div className="border rounded mt-3">
        <h1 className="mt-3">Tarefas</h1>
        {tasks.map((task) => {
          return (
            <div key={task._id} className="m-4">
              <div>
                <p>{task.details}</p>

                {!task.complete && (
                  <input
                    type="select"
                    defaultValue={form.status}
                    onChange={(e) => handleSelect(e, task._id)}
                  >
                    <option value="aberto">Em Aberto</option>
                    <option value="andamento">Em Andamento</option>
                    <option value="finalizando">Finalizando</option>
                  </input>
                )}
              </div>
              <div>
                {task.complete ? (
                  <p>Tarefa finalizada no dia: {task.dateFin.slice(0, 10)}</p>
                ) : (
                  <p>Data final esperada: {task.dateFin.slice(0, 10)}</p>
                )}

                <button onClick={(e) => handleDeleteTask(e, task._id)}>
                  Excluir Task
                </button>
                <button onClick={(e) => handleTaskComplete(e, task._id)}>
                  Concluir Task
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TasksPage;
