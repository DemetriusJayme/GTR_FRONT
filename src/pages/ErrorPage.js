import { NavLink } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/20/solid";
function ErrorPage() {
  return (
    <div className="flex items-center">
      <div className="w-80 bg-blue text-white"></div>
      <div className="md:grid md:grid-cols-12 gap-2">
        <NavLink
          to="/task"
          className="system md:col-span-6 bg-gray-100 text-blue p-8 rounded-md mb-2  flex flex-col content-center items-center"
        >
          <FaceFrownIcon className="h-30 w-30 mb2 " />
          <h4 className="mt-2 text-2xl font-bold">
            OOOOPSSSS!! 404 Page Error
          </h4>
          <h4 className="mt-2 text-2xl font-bold">
            Something went wrong. Sorry
          </h4>
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
