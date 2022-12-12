import { Link } from "react-router-dom";
import { CheckIcon, LinkIcon, PencilIcon } from "@heroicons/react/20/solid";

function ListUserPage() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h1>All Users</h1>
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
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
              placeholder="Search Users"
              required
            />
          </div>
        </form>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3 ">
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
                    className="links"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3 ">
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
                    className="links"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3 ">
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
                    className="links"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3 ">
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
                    className="links"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="pl-3 ">
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
                    className="links"
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav className=" flex w-full items-center justify-center">
          <ul className="pagination">
            <li>
              <Link to="#" className="previous">
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="#" className="item">
                1
              </Link>
            </li>
            <li>
              <Link to="#" className="item">
                2
              </Link>
            </li>
            <li>
              <Link to="#" aria-current="page" className="item-current">
                3
              </Link>
            </li>
            <li>
              <Link to="#" className="item">
                4
              </Link>
            </li>
            <li>
              <Link to="#" className="item">
                5
              </Link>
            </li>
            <li>
              <Link to="#" className="next">
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default ListUserPage;
