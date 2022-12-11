import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export default function SubMenu({ item, open }) {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  return (
    <div key={item.name} className="inline-flex flex-col w-full">
      <div
        key={item.name}
        className={`cursor-pointer  ${
          openSubmenu
            ? "bg-dark-blue text-white hover:bg-dark-grey"
            : "text-white hover:bg-orange"
        } text-sm font-medium flex justify-between ${
          open
            ? "px-3 py-2 items-center rounded-md mb-3 inline-flex"
            : "mb-3 h-10 rounded-md"
        }`}
        onClick={() => {
          if (open) setOpenSubmenu(!openSubmenu);
        }}>
        <div className="flex items-center">
          <item.icon
            className={`h-6 w-6 mr-2 ${!open && "h-10 w-10 m-0 p-2"}`}
            aria-hidden="true"
          />

          <div className={`${!open && "hidden"}`}>{item.name}</div>
        </div>

        {item.submenu && open && (
          <ChevronUpIcon
            className={`h-4 w-4 mr-2 duration-300 ${
              !openSubmenu && "rotate-180"
            }`}
            onClick={() => {
              setOpenSubmenu(!openSubmenu);
            }}
          />
        )}
      </div>
      <Transition
        show={openSubmenu}
        enter="transition duration-1000 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        <>
          {item.submenu && openSubmenu && open && (
            <>
              {item.submenuItems.map((submenuItems, index) => (
                <NavLink
                  key={submenuItems.name}
                  to={submenuItems.to}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-dark-blue text-white hover:bg-dark-grey"
                        : "bg-blue2 text-white hover:bg-orange"
                    } text-sm font-medium px-6 w-full ${
                      open
                        ? "px-3 py-2 items-center rounded-md mb-1 inline-flex"
                        : "mb-3 h-10 rounded-md"
                    }`
                  }>
                  <submenuItems.icon
                    className={`h-6 w-6 mr-2 ${!open && "h-10 w-10 m-0 p-2"}`}
                    aria-hidden="true"
                  />

                  <div className={`${!open && "hidden"}`}>
                    {submenuItems.name}
                  </div>
                </NavLink>
              ))}
            </>
          )}
        </>
      </Transition>
    </div>
  );
}
