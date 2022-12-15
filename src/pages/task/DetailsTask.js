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
        <div className="md:grid md:grid-cols-4 gap-4 p-0  mb-4">
          <div className=" col-span-3">
            <h1 className="mb-0 flex">
              {task.name}
              <span className="text-orange text-sm ml-2">{task.status}</span>
            </h1>

            <h4 className="author text-sm">
              <span className="font-bold">Author:</span> {task.author.name}
            </h4>
          </div>

          <div>
            <div className="">
              <span className="font-bold">Priority: </span>
              <span className="tag"> {task.priority}</span>
            </div>
            {/* codicional cor */}
            <div className="">
              <span className="font-bold">Deadline:</span>{" "}
              <span className="font-bold text-orange ">{task.deadline}</span>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 mb-4 rounded-md">
          <div className=" col-span-3">
            <p>{task.description}</p>
          </div>
          <div className=" col-span-1">
            <span className="font-bold">Estimated:</span>{" "}
            <span>{task.estimated}h</span>
          </div>
        </div>
        <hr className="mb-0 mt-2" />
        <div className="md:grid md:grid-cols-2 mb-4 gap-4 pt-0 bg-white p-0 rounded-md">
          <div>
            {task.members.length && (
              <ul className="members">
                <p className="mb-1 font-bold text-md text-blue">Members:</p>
                {task.members.map((member) => (
                  <li className="ml-2" key={member._id}>
                    {member.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            {task.tags.length && (
              <ul className="tags">
                <p className="mb-1 font-bold text-md text-blue">Tags:</p>
                {task.tags.map((tag) => (
                  <li className="tag" key={crypto.randomUUID()}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="flex justify-end items-right bg-gray-100 p-2  mt-4">
        <div className="flex justify-center gap-2 items-center">
          <button className="btn mt-0">ACCEPT</button>
          <button className="btn mt-0">REJECT</button>
          <button className="btn mt-0">EDIT</button>
          <button className="btn mt-0">ARCHIVE</button>
        </div>
      </section>
    </>
  );
}

export default DetailsTask;
