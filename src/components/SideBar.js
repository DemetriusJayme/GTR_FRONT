import { Link } from "react-router-dom";

import { ArrowLeftIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(true);

  const navigation = [
    { name: "Dashboard", to: "/", current: true },
    { name: "Login", to: "/login", current: false },
    { name: "Sign-Up", to: "/sign-up", current: false },
    { name: "Model-form", to: "/model-form", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="invisible w-0 md:visible md:w-auto">
      <div
        className={`bg-dark-gray h-screen p-5  relative duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <ArrowLeftIcon
          className={`bg-white  text-dark-gray text-2xl rounded-full absolute -right-3  border border-dark-gray h-6 w-6 p-1 cursor-pointer duration-300 ${
            !open && "duration-300 rotate-180"
          }`}
          aria-hidden="true"
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex items-center pt-8">
          <UsersIcon
            className={`h-6 w-6 text-white mr-3 ${!open && "mr-0 h-20 w-20"}`}
            aria-hidden="true"
          />
          <h1
            className={`text-white duration-300 scale-1 ${!open && "scale-0"}`}
          >
            Cadastro de Usuários
          </h1>
        </div>
        <div className="inline-flex flex-col">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                `px-3 py-2 items-center w-60 rounded-md text-sm font-medium inline-flex  mb-3
                ${!open && "bg-white"}`
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <h1
                className={`text-white duration-300 scale-1 ${
                  !open && "scale-0"
                }`}
              >
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
        {/*  Cadastro de Tarefas
        Minhas Tarefas
        Relatorios */}
      </div>
    </div>
  );
}

export default SideBar;
