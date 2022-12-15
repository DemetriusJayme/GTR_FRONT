import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "../../api/api";

function DetailsTask() {
  const location = useLocation();
  const { id } = useParams();
  const [task, setTask] = useState(location.state);

  useEffect(() => {
    if (task) return;

    async function getTask() {
      try {
        let response = await api.get(`/task/${id}`);
        setTask(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, [id, task]);

  if (!task) return <h1>Carregando a tarefa...</h1>;
  return (
    <>
      <section>
        <h1>{task.name}</h1>
        <p>{task.description}</p>
      </section>
    </>
  );
}

export default DetailsTask;
