import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MembersDropDownMenu({ onChange, selected = [] }) {
  const { loggedInUser } = useContext(AuthContext);
  let team = loggedInUser?.user.team || [];

  function handleChange(id) {
    let index = selected.indexOf(id);
    let result;

    if (index === -1) {
      result = [...selected, id];
    } else {
      result = selected.filter((_id) => _id !== id);
    }
    onChange({
      target: {
        name: "members",
        value: result,
      },
    });
  }

  function disallowDoubleClickSelection(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-start">
      <div className="group btn items-end relative">
        <span htmlFor="members">Members</span>
        <ChevronDownIcon className="h-4 w-4 ml-1 transform group-hover:-rotate-180 transition duration-300 ease-in-out" />
        <div className="absolute left-0 top-full overflow-hidden group-hover:overflow-auto h-36 pt-1 rounded-md drop-shadow ">
          <table
            className="table-auto transform opacity-0 group-hover:opacity-100
            transition duration-300 ease-in-out origin-top"
          >
            <thead>
              <tr>
                <th className="px-2 py-1"></th>
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Registration</th>
              </tr>
            </thead>
            <tbody>
              {team.map((user) => (
                <tr
                  key={crypto.randomUUID()}
                  className="hover:bg-slate-100 cursor-pointer"
                  onClick={() => handleChange(user._id)}
                  onMouseDown={disallowDoubleClickSelection}
                >
                  <td className="px-2 py-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="members"
                      id="members"
                      checked={selected.includes(user._id)}
                      onChange={() => {}}
                    />
                  </td>
                  <td className="px-2 py-1 whitespace-nowrap">{user.name}</td>
                  <td className="px-2 py-1">{user.registration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul className="list-disc flex flex-wrap w-full sm:gap-6 ml-6">
        {team
          .filter((user) => selected.includes(user._id))
          .map(({ _id, name }) => (
            <li key={crypto.randomUUID()} className="ml-6 w-full sm:w-max ">
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}
