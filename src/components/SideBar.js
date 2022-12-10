import { ArrowLeftIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(true);
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
        {/*  Cadastro de Tarefas
        Minhas Tarefas
        Relatorios */}
      </div>
    </div>
  );
}

export default SideBar;
