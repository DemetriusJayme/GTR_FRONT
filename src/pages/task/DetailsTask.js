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
        <div className="md:grid md:grid-cols-4 gap-8 p-0  mb-8">
          <div className=" col-span-3">
            <h1>
              {task.name} / {task.status}
            </h1>

            <h4 className="author mb-4">Author: {task.author.name}</h4>
          </div>

          <div>
            <p className="">
              Priority: <span className="uppercase"> {task.priority}</span>
            </p>
            {/* codicional cor */}
            <p className="">Deadline: {task.deadline}</p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 mb-4 rounded-md">
          <div className=" col-span-3">
            <p>{task.description}</p>
          </div>
          <div className=" col-span-1">
            <p>{task.estimated}h</p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 gap-4  bg-white p-0 rounded-md">
          <div>
            {/* CONDICIONAL APRESENTAR */}
            <ul className="members">
              <h3>Members:</h3>
              {task.members.map((member) => (
                <li key={member._id}>{member.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="tags">
              <h3>Tags:</h3>
              {task.tags.map((tag) => (
                <li key={crypto.randomUUID()}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-4 items-center">
        <button className="btn m-0">ACCEPT</button>
        <button className="btn m-0">REJECT</button>
        <button className="btn m-0">EDIT</button>
        <button className="btn m-0">ARCHIVE</button>
      </section>
    </>
  );
}

export default DetailsTask;
