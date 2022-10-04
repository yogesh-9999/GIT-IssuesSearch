import React from "react";

const Navbar = () => {
  return (
    <header  className="text-gray-600 bg-teal-200 body-font">
      <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
           
          </svg>
          <span  className="ml-3 text-xl">GitRepo</span>
        </a>
        <nav  className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">About</a>
          <a href="/" className="mr-5 hover:text-gray-900">Home</a>
          <a href="/" className="mr-5 hover:text-gray-900">Contact Us</a>
          
        </nav>
        <button  className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            
             className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
          
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
