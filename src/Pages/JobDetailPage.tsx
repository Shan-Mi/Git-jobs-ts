import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchData } from "../Api";
import JobDetail from "../Components/JobDetail";
import { Job } from "../constants";
import JobsContext from "../context/JobsContext";
import { getOneJob } from "../utilities";

const JobDetailPage: React.FC = () => {
  const { jobs } = useContext(JobsContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [, , jobtitle, id] = history.location.pathname.split("/");
  const [job, setJob] = useState<Job>({} as Job);
  const [btnContent, setBtnContent] = useState("Go Back");

  const handleClick = () => {
    if (btnContent === "Go Back") {
      return history.goBack();
    }
    return history.push("/");
  };

  // Now we can share link, app will not crash.
  useEffect(() => {
    if (jobs) {
      if (Object.keys(jobs).includes(jobtitle)) {
        const [newJob] = getOneJob(jobtitle, id, jobs);
        return setJob(newJob);
      }
      setIsLoading(true);
      const fetchJob = async () => {
        const newJob = await fetchData("id", id);
        setBtnContent("Go to Frontpage");
        setJob(newJob);
        setIsLoading(false);
      };
      fetchJob();
    }
  }, [id, jobs, jobtitle]);

  return (
    <div className="bg-black bg-opacity-75 h-full">
      <header>
        <h1 className="text-pink-600 text-3xl text-center pt-4">
          Job Type: {jobtitle}
        </h1>
        <button
          className="bg-blue-100 px-2 ml-10 my-5 rounded-md hover:bg-blue-200 hover:text-gray-50"
          onClick={handleClick}>
          {btnContent}
        </button>
      </header>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <JobDetail job={job} />}
    </div>
  );
};

export default JobDetailPage;
