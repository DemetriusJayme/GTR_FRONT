import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MembersDropDownMenu({ onChange }) {
  const { loggedInUser } = useContext(AuthContext);
  let team = loggedInUser?.user.team || [];
  let [selected, setSelected] = useState({});

  function getSelected(selected) {
    return team.filter((_, index) => !!selected[index]);
  }

  function handleChange(index) {
    let resSelected = {
      ...selected,
      ...{ [index]: index in selected ? !selected[index] : true },
    };
    setSelected(resSelected);
    onChange({
      target: {
        name: "members",
        value: [...getSelected(resSelected)].map((user) => user._id),
      },
    });
  }

  function disallowDoubleClickSelection(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  }

  return (
    <div className="mt-4 flex flex-wrap sm:flex-nowrap items-start">
      <div className="group btn items-end relative">
        <span htmlFor="members">Members</span>
        <ChevronDownIcon className="h-4 w-4 ml-1 transform group-hover:-rotate-180 transition duration-150 ease-in-out" />

        <table
          className="left-0 top-full mt-1 rounded-md drop-shadow table-auto transform scale-0 group-hover:scale-100 absolute
          transition duration-300 ease-in-out origin-top">
          <thead>
            <tr>
              <th className="px-2 py-1"></th>
              <th className="px-2 py-1">Name</th>
              <th className="px-2 py-1">Registration</th>
            </tr>
          </thead>
          <tbody>
            {team.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-slate-100 cursor-pointer"
                onClick={() => handleChange(index)}
                onMouseDown={disallowDoubleClickSelection}>
                <td className="px-2 py-1">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="members"
                    id="members"
                    checked={selected[index] || false}
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
      <ul className="list-disc flex flex-wrap w-full sm:gap-6 ml-6">
        {getSelected(selected).map(({ _id, name }) => (
          <li key={_id} className="ml-6 w-full sm:w-max ">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
