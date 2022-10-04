import React from "react";
import { Octokit } from "octokit";
import {  useState } from "react";
import { Issue } from "./Issue";
import Heading from "./Heading";

import env from "react-dotenv";

const Issues = () => {
  console.log(env.token);
  const [issues, setIssues] = useState([]);
  const [label, setLabel] = useState("");
  const octokit = new Octokit({
    auth: `${env.token}`,
  });

  const getlistonbasisoflabel = async (val) => {
    const data = await octokit.request(
        `GET /repos/PHP-FFMpeg/PHP-FFMpeg/issues?per_page=100`,
        {
          owner: "PHP-FFMpeg",
          repo: "PHP-FFMpeg",
        }
      );
      console.log(label)
      

      const filtereddata=data.data.filter((i)=> i.title.includes(label))
      setIssues(filtereddata);
  };

  const getdata = async () => {
    
    const data = await octokit.request(
      "GET /repos/PHP-FFMpeg/PHP-FFMpeg/issues?per_page=100",
      {
        owner: "PHP-FFMpeg",
        repo: "PHP-FFMpeg",
      }
    );
    setIssues(data.data);

    
    console.log(data);
    console.log(data.data);
  };

  return (
    <div>
      <Heading />
      <div className="flex space-x-2  my-4 justify-center">
        <button
          onClick={getdata}
          type="button"
          className="inline-block px-8 py-2 border-2 border-blue-600 text-blue-600 font-medium text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Get all Issues
        </button>
        <div>

        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search for labels
        </label>
        <div className="relative mx-5 w-80 ">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-900 dark:text-gray-400"
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
            value={label}
            onChange={(e)=>{setLabel(e.target.value)}}
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
            placeholder="write labels"
            required
          />
          <button
            type="submit"
            onClick={getlistonbasisoflabel}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      </div>
      
      <button
          onClick={getdata}
          type="button"
          className="inline-block px-8 py-2 border-2 border-green-100 text-black-600 font-medium text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
        No of Issues: {issues.length}
      </button>

      {issues.map((i) => {
        return (
             
          <div key={i.id} >
             <Issue i={i}/>
          
          </div>
        );
      })}

     
    </div>
  );
};

export default Issues;
