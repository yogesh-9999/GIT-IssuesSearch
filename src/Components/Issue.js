import React from "react";

export const Issue = ({i}) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-5 mx-auto ">
        <div className="lg:w-2/3 flex flex-col py-8 px-8 rounded-xl bg-cyan-200 sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
           {i.title}
          </h1>
          <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
            Issue Number: {i.number}
          </button>
        </div>
      </div>
    </section>
  );
};
