import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  Bars3Icon,
  UserPlusIcon,
  ChatBubbleBottomCenterIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import SubMenu from "./SubMenu";

function SideBar() {
  const [open, setOpen] = useState(true);

  const navigation = [
    {
      name: "Modelos - Form",
      icon: CodeBracketIcon,
      to: "/template/forms",
    },
    { name: "Dashboard", icon: Squares2X2Icon, to: "/" },
    {
      name: "All Tasks",
      icon: ClipboardDocumentListIcon,
      to: "/task",
      submenu: true,
      submenuItems: [
        {
          name: "Add Task",
          icon: ClipboardDocumentListIcon,
          to: "/task/new",
        },
        {
          name: "Details Task",
          icon: ClipboardDocumentListIcon,
          to: "/task/:id",
        },
      ],
    },
    {
      name: "All Users",
      icon: UsersIcon,
      to: "/users",
      submenu: true,
      submenuItems: [
        {
          name: "Add User",
          icon: UserPlusIcon,
          to: "/add-user",
        },
        {
          name: "Edit User",
          icon: UserGroupIcon,
          to: "/edit-user",
        },
        {
          name: "Statistic Users",
          icon: PresentationChartLineIcon,
          to: "/user/:id",
        },
      ],
    },
    {
      name: "My Agenda",
      icon: CalendarDaysIcon,
      to: "/agenda",
      submenu: true,
      submenuItems: [
        {
          name: "Add Task",
          icon: DocumentPlusIcon,
          to: "/add-task",
        },
      ],
    },
    {
      name: "Report",
      icon: DocumentChartBarIcon,
      to: "/report",
    },
    {
      name: "Chatbot",
      icon: ChatBubbleBottomCenterIcon,
      to: "/chatbot",
    },
    {
      name: "Log-out",
      icon: ArrowLeftOnRectangleIcon,
      to: "/log-out",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="invisible w-0 md:visible md:w-auto bg-gray-100 mt-4">
      <div
        className={`bg-blue rounded-r-lg  p-5 pt-10  relative duration-300 ${
          open ? "w-72" : "w-20"
        }`}>
        <Bars3Icon
          className={`bg-dark-blue  text-white text-2xl rounded-md absolute -right-3   h-6 w-6 p-1 cursor-pointer top-1.5 hover:bg-orange ${
            !open && "rotate-180"
          }`}
          aria-hidden="true"
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center rounded-md bg-white mb-4  border-none">
          <MagnifyingGlassIcon
            className={`h-6 w-6 ml-2 mr-2 duration-75 ${
              !open && "h-10 w-10 m-0"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`bg-transparent w-full focus:outline-none  border-none text-sm font-medium ${
              !open && "hidden"
            }`}
          />
        </div>
        <div>
          {navigation.map((item) => (
            <div key={item.name} className="inline-flex flex-col w-full">
              {item.submenu ? (
                <SubMenu item={item} open={open} />
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-dark-blue text-white hover:bg-dark-grey"
                        : "text-white hover:bg-orange",
                      ` text-sm font-medium flex justify-between
                ${
                  open
                    ? "px-3 py-2 items-center rounded-md mb-3 inline-flex"
                    : "mb-3 h-10 rounded-md "
                }`
                    )
                  }>
                  <div className="flex items-center">
                    <item.icon
                      className={`h-6 w-6 mr-2 ${!open && "h-10 w-10 m-0 p-2"}`}
                      aria-hidden="true"
                    />

                    <div className={`${!open && "hidden"}`}>{item.name}</div>
                  </div>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
