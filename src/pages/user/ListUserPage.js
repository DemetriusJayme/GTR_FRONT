import { Link } from "react-router-dom";
import { CheckIcon, LinkIcon, PencilIcon } from "@heroicons/react/20/solid";

function ListUserPage() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-10">
        <div className="min-w-0 flex-1">
          <h1 className="text-4xl font-bold leading-7 text-blue2 sm:truncate sm:text-4xl sm:tracking-tight">
            All Users
          </h1>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button type="button" className="btn">
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button type="button" className="btn">
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              View
            </button>
          </span>

          <span className="sm:ml-3">
            <button type="button" className="btn-blue">
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </span>
        </div>
      </div>

      <section>
        <form>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
              placeholder="Search Users"
              required
            />
          </div>
        </form>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-white uppercase bg-blue2">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3  text-gray-500">
                    <div className="text-base font-semibold">
                      Gabriel Stroligo
                    </div>
                    <div className="font-normal">gabriel@gtr.com</div>
                  </div>
                </th>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    type="button"
                    data-modal-toggle="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default ListUserPage;
