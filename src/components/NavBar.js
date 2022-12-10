import { Link } from "react-router-dom";
import { useContext, Fragment } from "react";
import { AuthContext } from "../contexts/authContext";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const { loggedInUser } = useContext(AuthContext);

  const navigation = [
    { name: "Dashboard", to: "/", current: true },
    { name: "Login", to: "/login", current: false },
    { name: "Sign-Up", to: "/sign-up", current: false },
    { name: "Model-form", to: "/model-form", current: false },
  ];
  const navigationLogged = [
    { name: "Dashboard", to: "/", current: true },
    { name: "Profile", to: "/profile", current: false },
    { name: "Tasks", to: "/tasks", current: false },
    { name: "Tasks", to: "/notification", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <svg
                      className="block h-8 w-auto lg:hidden"
                      width="70"
                      height="24"
                      viewBox="0 0 70 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.75397 0.082896C3.52191 0.136006 3.34738 0.142997 2.81848 0.360864C1.15277 1.04712 0.266378 2.29808 0.0754199 4.23206C0.0179351 4.8145 -0.0123146 8.35316 0.00473329 12.5019L0.0345675 19.7537L0.270328 20.3385C0.823034 21.71 1.79258 22.6433 3.07887 23.042C4.17576 23.3822 6.79314 23.4734 14.4318 23.4378C21.2899 23.4059 21.3478 23.4039 21.7603 23.1801C21.989 23.0559 22.3258 22.7977 22.5086 22.6062C23.159 21.9251 23.1534 21.9726 23.2201 16.5375C23.2609 13.2125 23.2449 11.4486 23.1716 11.1752C22.8921 10.1333 22.07 9.4044 21.0568 9.30027C19.9997 9.19155 19.0738 9.69823 18.5563 10.6688C18.3381 11.0778 18.3287 11.2263 18.2969 14.7553L18.2639 18.4173L16.6336 18.4852C15.7371 18.5225 12.7231 18.5532 9.93589 18.5534L4.86828 18.5537L4.86849 15.2931C4.86849 13.4997 4.89947 10.4493 4.9372 8.51437L5.00571 4.99647L13.1751 4.96673C21.3403 4.9371 21.3447 4.937 21.7674 4.70984C22.3517 4.39598 22.9211 3.73153 23.0655 3.19532C23.3379 2.18393 22.9389 1.00403 22.1467 0.477727C21.4728 0.0300993 21.0934 -0.0195674 18.5378 0.00516164C17.2228 0.0179957 13.2701 0.0529498 9.75397 0.082896ZM27.9454 0.0502374C27.1851 0.152806 26.989 0.233775 26.5389 0.631423C25.9198 1.17849 25.6638 1.72754 25.6607 2.51448C25.6578 3.28578 25.8361 3.7044 26.3988 4.24709C27.0873 4.91112 27.4817 4.98927 30.1448 4.98927H32.4104L32.4389 13.2584L32.4672 21.5275L32.7901 22.1014C33.0613 22.5832 33.2196 22.7312 33.7776 23.0243C34.3359 23.3174 34.5258 23.3664 34.9637 23.3307C35.6208 23.2771 36.4214 22.8809 36.7521 22.4457C37.2763 21.7559 37.2776 21.7361 37.3591 13.0966L37.4355 5.00305L39.7883 4.97007C42.076 4.93804 42.1554 4.92969 42.6567 4.67051C44.067 3.94136 44.3527 1.97097 43.2139 0.827899C42.4814 0.0925998 42.5916 0.102721 34.9101 0.0638015C31.1652 0.0448113 28.0311 0.0387597 27.9454 0.0502374ZM55.7522 0.0839397C47.4092 0.144354 47.861 0.0975037 47.0844 0.983055C46.083 2.12498 46.3405 3.81563 47.6385 4.62136L48.1473 4.9371L55.8999 4.98927C64.25 5.04551 63.8365 5.01588 64.4674 5.60197C64.901 6.00483 65.056 6.37222 65.0542 6.99264C65.0509 8.01018 64.3283 8.86068 63.3005 9.05632C62.9779 9.11778 59.7559 9.18758 55.6612 9.2218C51.4333 9.25728 48.3814 9.32437 48.0877 9.38854C47.42 9.53431 46.8624 9.96608 46.5642 10.5682C46.0419 11.6229 46.214 12.6893 47.0405 13.5189C47.5135 13.9937 47.365 13.917 56.6878 18.5004C58.0028 19.1469 60.7159 20.4873 62.7169 21.479C66.0217 23.1168 66.4152 23.2865 67.0094 23.3302C67.8596 23.3928 68.4439 23.171 68.9872 22.5793C69.5349 21.9828 69.7226 21.222 69.5325 20.3691C69.2885 19.2748 69.2125 19.2239 63.8717 16.5835L59.0984 14.2235L61.5314 14.1606C63.6056 14.107 64.0768 14.0642 64.7272 13.8708C67.3768 13.0825 69.2978 10.9712 69.8579 8.2316C70.1748 6.68254 69.9664 5.3095 69.1855 3.80029C68.1052 1.71262 65.9916 0.326013 63.4966 0.0681839C63.2965 0.0475242 59.8115 0.0546195 55.7522 0.0839397Z"
                        fill="#fff"
                      />
                    </svg>
                    <svg
                      className="hidden h-8 w-auto lg:block"
                      width="70"
                      height="24"
                      viewBox="0 0 70 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.75397 0.082896C3.52191 0.136006 3.34738 0.142997 2.81848 0.360864C1.15277 1.04712 0.266378 2.29808 0.0754199 4.23206C0.0179351 4.8145 -0.0123146 8.35316 0.00473329 12.5019L0.0345675 19.7537L0.270328 20.3385C0.823034 21.71 1.79258 22.6433 3.07887 23.042C4.17576 23.3822 6.79314 23.4734 14.4318 23.4378C21.2899 23.4059 21.3478 23.4039 21.7603 23.1801C21.989 23.0559 22.3258 22.7977 22.5086 22.6062C23.159 21.9251 23.1534 21.9726 23.2201 16.5375C23.2609 13.2125 23.2449 11.4486 23.1716 11.1752C22.8921 10.1333 22.07 9.4044 21.0568 9.30027C19.9997 9.19155 19.0738 9.69823 18.5563 10.6688C18.3381 11.0778 18.3287 11.2263 18.2969 14.7553L18.2639 18.4173L16.6336 18.4852C15.7371 18.5225 12.7231 18.5532 9.93589 18.5534L4.86828 18.5537L4.86849 15.2931C4.86849 13.4997 4.89947 10.4493 4.9372 8.51437L5.00571 4.99647L13.1751 4.96673C21.3403 4.9371 21.3447 4.937 21.7674 4.70984C22.3517 4.39598 22.9211 3.73153 23.0655 3.19532C23.3379 2.18393 22.9389 1.00403 22.1467 0.477727C21.4728 0.0300993 21.0934 -0.0195674 18.5378 0.00516164C17.2228 0.0179957 13.2701 0.0529498 9.75397 0.082896ZM27.9454 0.0502374C27.1851 0.152806 26.989 0.233775 26.5389 0.631423C25.9198 1.17849 25.6638 1.72754 25.6607 2.51448C25.6578 3.28578 25.8361 3.7044 26.3988 4.24709C27.0873 4.91112 27.4817 4.98927 30.1448 4.98927H32.4104L32.4389 13.2584L32.4672 21.5275L32.7901 22.1014C33.0613 22.5832 33.2196 22.7312 33.7776 23.0243C34.3359 23.3174 34.5258 23.3664 34.9637 23.3307C35.6208 23.2771 36.4214 22.8809 36.7521 22.4457C37.2763 21.7559 37.2776 21.7361 37.3591 13.0966L37.4355 5.00305L39.7883 4.97007C42.076 4.93804 42.1554 4.92969 42.6567 4.67051C44.067 3.94136 44.3527 1.97097 43.2139 0.827899C42.4814 0.0925998 42.5916 0.102721 34.9101 0.0638015C31.1652 0.0448113 28.0311 0.0387597 27.9454 0.0502374ZM55.7522 0.0839397C47.4092 0.144354 47.861 0.0975037 47.0844 0.983055C46.083 2.12498 46.3405 3.81563 47.6385 4.62136L48.1473 4.9371L55.8999 4.98927C64.25 5.04551 63.8365 5.01588 64.4674 5.60197C64.901 6.00483 65.056 6.37222 65.0542 6.99264C65.0509 8.01018 64.3283 8.86068 63.3005 9.05632C62.9779 9.11778 59.7559 9.18758 55.6612 9.2218C51.4333 9.25728 48.3814 9.32437 48.0877 9.38854C47.42 9.53431 46.8624 9.96608 46.5642 10.5682C46.0419 11.6229 46.214 12.6893 47.0405 13.5189C47.5135 13.9937 47.365 13.917 56.6878 18.5004C58.0028 19.1469 60.7159 20.4873 62.7169 21.479C66.0217 23.1168 66.4152 23.2865 67.0094 23.3302C67.8596 23.3928 68.4439 23.171 68.9872 22.5793C69.5349 21.9828 69.7226 21.222 69.5325 20.3691C69.2885 19.2748 69.2125 19.2239 63.8717 16.5835L59.0984 14.2235L61.5314 14.1606C63.6056 14.107 64.0768 14.0642 64.7272 13.8708C67.3768 13.0825 69.2978 10.9712 69.8579 8.2316C70.1748 6.68254 69.9664 5.3095 69.1855 3.80029C68.1052 1.71262 65.9916 0.326013 63.4966 0.0681839C63.2965 0.0475242 59.8115 0.0546195 55.7522 0.0839397Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {loggedInUser &&
                        navigationLogged.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      {!loggedInUser &&
                        navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default NavBar;
