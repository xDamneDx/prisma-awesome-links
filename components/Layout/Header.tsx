import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <svg
            className="w-10 h-10 p-2 text-white bg-blue-500 rounded-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {/* {user ? (
            <div className="flex items-center space-x-5">
              <Link href="/favorites" className="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                  My Favorites
              </Link>
              <Link href="/api/auth/logout" className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                  Logout
              </Link>
              <img
                alt="profile"
                className="w-12 h-12 rounded-full"
                src={user.picture}
              />
            </div>
          ) : (
            <Link href="/api/auth/login"  className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                Login
            </Link>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
