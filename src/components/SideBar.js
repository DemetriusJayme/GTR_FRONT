import { Link } from "react-router-dom";

import {
  Bars3Icon,
  UserPlusIcon,
  ChatBubbleBottomCenterIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  ArrowUpTrayIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(true);

  const navigation = [
    { name: "Dashboard", icon: Squares2X2Icon, to: "/", current: true },
    { name: "Add User", icon: UserPlusIcon, to: "/user", current: false },
    {
      name: "Task",
      icon: ClipboardDocumentListIcon,
      to: "/task-up",
      current: false,
    },
    {
      name: "Report",
      icon: DocumentChartBarIcon,
      to: "/report",
      current: false,
    },
    {
      name: "Chatbot",
      icon: ChatBubbleBottomCenterIcon,
      to: "/chatbot",
      current: false,
    },
    {
      name: "Log-out",
      icon: ArrowLeftOnRectangleIcon,
      to: "/log",
      current: false,
    },
    {
      name: "Upload",
      icon: ArrowUpTrayIcon,
      to: "/fileUpload",
      current: false,
    },
    {
      name: "Calendar",
      icon: CalendarDaysIcon,
      to: "/calendar",
      current: false,
    },
    {
      name: "Modelos - Form",
      icon: CodeBracketIcon,
      to: "/model-form",
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="invisible w-0 md:visible md:w-auto">
      <div
        className={`bg-dark-grey h-screen p-5  relative duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <Bars3Icon
          className={`bg-white  text-dark-grey text-2xl rounded-full absolute -right-3  border border-dark-grey h-6 w-6 p-1 cursor-pointer  ${
            !open && "rotate-180"
          }`}
          aria-hidden="true"
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex flex-col w-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.current
                  ? "bg-gray-900 "
                  : "text-gray-300 hover:bg-white hover:text-white hover:svg-stroke-dark-grey",
                ` text-sm font-medium
                text-white   hover:text-dark-grey hover:stroke-dark-grey
                ${
                  open
                    ? "px-3 py-2 items-center rounded-md mb-3 inline-flex"
                    : "mb-3 h-10 rounded-md "
                }`
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={`h-6 w-6 mr-2 ${!open && "h-10 w-10 m-0 p-2"}`}
                aria-hidden="true"
              />
              <div className={`${!open && "scale-0"}`}>{item.name}</div>
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
