import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const labelsClasses = [
  "alta",
  "media",
  "baixa",
];

const labelsClassesStatus = [
  "Aberto",
  "Fechada"
];


export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {

      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">

      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="shadow rounded-lg bg-white overflow-hidden block p-8">
          <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            Add Event Details
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
          <div>
            <div>
              <div className="mb-4">
                <label htmlFor="title" className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add title"
                  value={title}
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="schedule" className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">schedule</label>
                <input
                  id="schedule"
                  type="text"
                  name="schedule"
                  value={daySelected.format("dddd, MMMM DD")}
                  required
                  readOnly
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  x-model="event_date"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Description</label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Add a description"
                  defaultValue={description}
                  required
                  className="pt-3 border-0 text-sm md:text-base text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="inline-block w-64 mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Priority</label>
                <div className="relative">
                  <div className="flex gap-x-2 flex-col">
                    {labelsClasses.map((lblClass, i) => (
                      <div>
                        <span
                          key={lblClass}
                          onClick={() => setSelectedLabel(lblClass)}
                          className={`${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                        >
                          {selectedLabel === lblClass && (
                            <span className="material-icons-outlined text-white text-sm">
                              +
                            </span>
                          )}
                          <span>{lblClass}</span>
                        </span>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inline-block w-64 mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Status</label>
                <div className="relative">
                  <div className="flex gap-x-2 flex-col">
                    {labelsClassesStatus.map((labelsClassesStatus, i) => (
                      <div>
                        <span
                          key={labelsClassesStatus}
                          onClick={() => setSelectedLabel(labelsClassesStatus)}
                          className={`${labelsClassesStatus} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                        >
                          {selectedLabel === labelsClassesStatus && (
                            <span className="material-icons-outlined text-white text-sm">
                              +
                            </span>
                          )}
                          <span>{labelsClassesStatus}</span>
                        </span>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-right">
            <button
              className="btn"
              onClick={() => setShowEventModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn-blue"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form >
      </div >
    </div >
  );
}
