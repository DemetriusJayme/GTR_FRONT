import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import api from "../api/api";
import { NavLink } from "react-router-dom";

import {
  ClipboardDocumentListIcon,
  UsersIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  BookOpenIcon,
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/20/solid";

function HomeLogedPage() {
  const { loggedInUser } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [reload, setReload] = useState(false);
  console.log(setReload);
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
      } catch (error) {
        //console.log(error);
      }
    }

    fetchUser();
  }, [reload]);

  return (
    <>
      <div className="lg:flex lg:justify-between mb-10">
        <div className="min-w-0 flex-1 ">
          <h3>
            Welcome, <span className="text-orange">{user.name}</span>
          </h3>
          <h1 className="text-4xl font-bold leading-7 text-blue2 sm:truncate sm:text-4xl sm:tracking-tight">
            Discover our tool
          </h1>

          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-blue uppercase font-bold hover:text-orange">
              <BookOpenIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="https://gtrdocumentacao.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                our documentation
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex md:mt-0 flex-col   bg-gray-50 rounded-md p-4 text-sm text-blue2  ">
          <div className="mb-1 font-bold">About you:</div>

          <div className="flex items-center">
            <EnvelopeIcon className="h-4 w-4 mr-2" /> {user.email}
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" /> {user.phone}
          </div>
          <div className="flex items-center">
            <IdentificationIcon className="h-4 w-4 mr-2" /> {user.registration}
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-8 gap-2">
        {loggedInUser.user.role !== "user" && (
          <NavLink
            to="/users"
            className="system md:col-span-2 bg-gray-100 text-blue p-8 rounded-md mb-2  flex flex-col content-center items-center hover:bg-orange hover:text-white cursor-pointer"
          >
            <UsersIcon className="h-12 w-12 mb2  " />
            <h4 className="mt-2 text-2xl font-bold">My Team</h4>
          </NavLink>
        )}
        <NavLink
          to="/task"
          className="system md:col-span-2 bg-gray-100 text-blue p-8 rounded-md mb-2  flex flex-col content-center items-center hover:bg-orange hover:text-white cursor-pointer"
        >
          <ClipboardDocumentListIcon className="h-12 w-12 mb2 " />
          <h4 className="mt-2 text-2xl font-bold">Tasks</h4>
        </NavLink>
        <NavLink
          to="/agenda"
          className="system md:col-span-2 bg-gray-100 text-blue p-8 rounded-md mb-2  flex flex-col content-center items-center hover:bg-orange hover:text-white cursor-pointer"
        >
          <CalendarDaysIcon className="h-12 w-12 mb2 " />
          <h4 className="mt-2 text-2xl font-bold">My Agenda</h4>
        </NavLink>
        <NavLink
          to="/report"
          className="system md:col-span-2 bg-gray-100 text-blue p-8 rounded-md mb-2  flex flex-col content-center items-center hover:bg-orange hover:text-white cursor-pointer"
        >
          <DocumentChartBarIcon className="h-12 w-12 mb2 " />
          <h4 className="mt-2 text-2xl font-bold">Report</h4>
        </NavLink>
      </div>
    </>
  );
}

export default HomeLogedPage;
