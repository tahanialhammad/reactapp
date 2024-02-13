import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Social from "./Social";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="max-w-2xltest mx-auto">
          <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
             
                <Link href="#" target="_blank" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-4 h-10"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Flowbite
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Flowbite
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        rel="nofollow"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Tailwind CSS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Discord
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022{" "}
                <Link
                  href="https://flowbite.com"
                  target="_blank"
                  className="hover:underline"
                >
                  Flowbite™
                </Link>
                . All Rights Reserved.
              </span>

              <Social />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
