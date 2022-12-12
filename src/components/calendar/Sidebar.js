import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 md:w-53 lg:w-64 w-full">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}