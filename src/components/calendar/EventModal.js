import GlobalContext from "../../contexts/GlobalContext";
import { useContext, useState } from "react";
//import { AuthContext } from "../../contexts/authContext";
import api from "../../api/api";
import Tags from "../../components/task/Tags";


export default function EventModal() {
  //const { loggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    description: "",
    name: "",
    deadline: new Date(),
    estimated: "00:30",
    priority: "regular",
    status: "started",
    // annex: [],
    tags: [],
  });

  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    completeCalendar();

    async function sendTask() {
      try {
        let response = await api.post("/task/new", form);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    sendTask();

    setShowEventModal(false);
  }

  function completeCalendar() {
      const calendarEvent = {
      title:"title",
      idhtml:"1234",
      label: "alta",
      day: 1670986800000,//daySelected.valueOf(),
      id: Date.now(),
    };
    dispatchCalEvent({ type: "push", payload: calendarEvent });
    
  }


  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">

      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <div className="shadow rounded-lg bg-white overflow-hidden block p-8">
          <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            Create a new task
            <div className="flex">
              {selectedEvent && (
                <svg
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}

                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />

                  delete
                </svg>
              )}
              <button onClick={() => setShowEventModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>
          <>
            <section className="overflow-visible">
              <form onSubmit={handleSubmit}>
                <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
                  <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name of the task"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                </div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="A description of the task"
                  value={form.description}
                  onChange={handleChange}
                />
                <Tags onChange={handleChange} selected={form.tags} />
                <div className="gap-x-8 flex flex-wrap sm:flex-nowrap items-center">
                  <div className="w-full">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                      type="date"
                      name="deadline"
                      id="deadline"
                      className="w-full"
                      value={daySelected.format('YYYY-MM-DD')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="estimated">Task's estimated time required</label>
                    <input
                      type="time"
                      name="estimated"
                      id="estimated"
                      className="w-full"
                      value={form.estimated}
                      min="00:05"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="area-button">
                  <button type="submit" className="btn-blue">
                    Create
                  </button>
                </div>
              </form>
            </section>
          </>
        </div >
      </div >
    </div >
  );
}

