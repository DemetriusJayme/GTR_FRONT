import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import {
  Bars3Icon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  UsersIcon,
  UserGroupIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import SubMenu from "./SubMenu";
import { UserCircleIcon } from "@heroicons/react/20/solid";

function SideBar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const navigation = [
    { name: "Dashboard", icon: Squares2X2Icon, to: "/home" },
    {
      name: "Tasks",
      icon: ClipboardDocumentListIcon,
      to: "/task",
    },
    {
      name: "Users",
      icon: UsersIcon,
      submenu: true,
      submenuItems: [
        {
          name: "Add User",
          icon: UserPlusIcon,
          to: "/add-user",
        },
        {
          name: "Profile",
          icon: UserCircleIcon,
          to: "/profile",
        },
        {
          name: "My Team",
          icon: UserGroupIcon,
          to: "/users",
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
  ];
  const [subMenu, setSubMenus] = useState(
    navigation
      .filter((item) => item.submenu)
      .reduce((acc, item) => {
        acc[item.name] = false;
        return acc;
      }, {})
  );

  function openSubMenu(name) {
    let result = {};
    for (let key in subMenu) {
      result[key] = key === name ? !subMenu[key] : false;
    }
    setSubMenus(result);
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedInUser(null);
  }

  if (!loggedInUser) return <></>;

  return (
    <div className="invisible w-0 md:visible md:w-auto mt-4">
      <div
        className={`bg-blue rounded-r-lg  p-5 pt-10  relative duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <Bars3Icon
          className={`bg-dark-blue  text-white text-2xl rounded-md absolute -right-3   h-6 w-6 p-1 cursor-pointer top-1.5 hover:bg-orange ${
            !open && "rotate-180"
          }`}
          aria-hidden="true"
          onClick={() => setOpen(!open)}
        />
        <div>
          {navigation.map((item) => (
            <div key={item.name} className="inline-flex flex-col w-full">
              {item.submenu ? (
                <SubMenu
                  item={item}
                  open={open}
                  openSubmenu={subMenu[item.name]}
                  setOpenSubMenu={openSubMenu}
                />
              ) : (
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium flex justify-between 
                    ${
                      isActive
                        ? "bg-dark-blue text-white hover:bg-dark-grey"
                        : "text-white hover:bg-orange"
                    }
                      ${
                        open
                          ? "px-3 py-2 items-center rounded-md mb-3 inline-flex"
                          : "mb-3 h-10 rounded-md"
                      }`
                  }
                  onClick={() => openSubMenu("")}
                >
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
          <div className="inline-flex flex-col w-full">
            <span
              className={`text-sm font-medium flex justify-between text-white hover:bg-orange cursor-pointer ${
                open
                  ? "px-3 py-2 items-center rounded-md mb-3 inline-flex"
                  : "mb-3 h-10 rounded-md"
              }`}
              onClick={handleLogout}
            >
              <div className="flex items-center">
                <ArrowLeftOnRectangleIcon
                  className={`h-6 w-6 mr-2 ${!open && "h-10 w-10 m-0 p-2"}`}
                  aria-hidden="true"
                />

                <div className={`${!open && "hidden"}`}>Log-out</div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
