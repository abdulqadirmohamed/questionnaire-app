import React from "react";

const NewProject = () => {
  return (
    <div>
      <form action="">
        <h1 className="my-4 py-4 font-bold text-blue-600 uppercase">Create project: Project details <hr /></h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Project Name (required)
          </label>
          <input
            type="text"
            placeholder="Enter title of project here"
            name="title"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter short description here"
            name="description"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button className="bg-[#545FDD] px-4 py-2 rounded-md">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
