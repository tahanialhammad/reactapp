import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const guestNavLinks = [
    { name: 'Home', route: '/' },
    { name: 'StateAndProps', route: 'state-and-props' },
    { name: 'EventListener', route: 'event-listener' },
    { name: 'TodoApp', route: 'todo-app' },
    { name: 'About', route: 'about' },
    { name: 'Conract', route: 'contact' },
    { name: 'Blog', route: 'posts' },
    { name: 'Blog', route: 'posts' },
    { name: 'Toggle', route: 'Toggle' },
    
  ];

  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto md:flex justify-between items-center">
        <div className="flex justify-between items-center">
          {/* <!-- logo --> */}
          <div className='me-4'>
            <NavLink to="/">
              <img
                src="images/svglogo.svg"
                width={'50px'}
                style={{ display: 'block' }}
                alt="tahani logo"
              />
            </NavLink>
          </div>
          {/* <!-- menu --> */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:flex flex-grow justify-between items-center ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="md:flex items-center space-x-5">
            {guestNavLinks.map(guestNavLink => (
              <li key={guestNavLink.name}>
                <NavLink to={guestNavLink.route} activeClassName="active" exact>
                  {guestNavLink.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <!-- search bar --> */}
          <div className="relative ">
            <input
              type="text"
              placeholder="Search hier"
              class="mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />

            <div className="absolute top-4 right-1 ">
              {/* https://iconsvg.xyz/ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          <div>
            <div className="md:flex items-center justify-between space-x-3">
              <button
                type="button"
                className="px-2 border rounded-full hover:shadow-lg"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                    <circle cx="12" cy="10" r="3" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </button>
              <NavLink
                to="/"
                activeClassName="active"
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </NavLink>

              <NavLink
                to="/"
                activeClassName="active"
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
