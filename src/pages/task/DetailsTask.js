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
        <button className="btn">actions</button>
      </section>
      <section>
        <div className="md:grid md:grid-cols-2 gap-8  bg-white p-0 md:p-8 rounded-md">
          <p>{task.description}</p>
          <p>{task.deadline}</p>
        </div>
        <p>{task.estimated}</p>
        <p>{task.priority}</p>
        <p>{task.status}</p>
        <ul className="members">
          {task.members.map((member) => (
            <li key={member._id}>{member.name}</li>
          ))}
        </ul>
        <ul className="tags">
          {task.tags.map((tag) => (
            <li key={crypto.randomUUID()}>{tag}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default DetailsTask;
