import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext.js";

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";

function HomePage() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-10">
        <div className="min-w-0 flex-1">
          <h3>Fron End Developer</h3>
          <h1 className="text-4xl font-bold leading-7 text-blue2 sm:truncate sm:text-4xl sm:tracking-tight">
            Gabriel Stroligo
          </h1>

          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Full-time
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              $120k &ndash; $140k
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button type="button" className="btn">
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button type="button" className="btn">
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              View
            </button>
          </span>

          <span className="sm:ml-3">
            <button type="button" className="btn-blue">
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </span>
        </div>
      </div>
      <section>
        <form>
          <button className="btn mr-2">
            <Link to="/sign-up">Cadastrar no sistema</Link>
          </button>
          <button className="btn  mr-2">
            <Link to="/login">Entrar no sistema</Link>
          </button>
          {loggedInUser && (
            <button className="btn  mr-2">
              <Link to="/profile">Vá para o Perfil</Link>
            </button>
          )}
        </form>
      </section>
      <section>
        <form>
          <button className="btn mr-2">
            <Link to="/sign-up">Cadastrar no sistema</Link>
          </button>
          <button className="btn  mr-2">
            <Link to="/login">Entrar no sistema</Link>
          </button>
          {loggedInUser && (
            <button className="btn  mr-2">
              <Link to="/profile">Vá para o Perfil</Link>
            </button>
          )}
        </form>
      </section>
      <section>
        <form>
          <button className="btn mr-2">
            <Link to="/sign-up">Cadastrar no sistema</Link>
          </button>
          <button className="btn  mr-2">
            <Link to="/login">Entrar no sistema</Link>
          </button>
          {loggedInUser && (
            <button className="btn  mr-2">
              <Link to="/profile">Vá para o Perfil</Link>
            </button>
          )}
        </form>
      </section>
    </>
  );
}

export default HomePage;
