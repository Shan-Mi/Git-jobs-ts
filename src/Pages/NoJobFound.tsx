import React from "react";
import { useHistory } from "react-router-dom";

const NoJobFound = () => {
  const history = useHistory();
  return (
    <div className="bg-black bg-opacity-75 h-screen flex flex-col justify-center items-center">
      <h1 className="text-pink-600 text-3xl text-center">No jobs found!</h1>
      <button
        className="bg-blue-100 p-5 mt-5 rounded-md hover:bg-blue-200 hover:text-gray-50"
        onClick={() => history.push("/")}>
        Go Back to Frontpage
      </button>
    </div>
  );
};

export default NoJobFound;
