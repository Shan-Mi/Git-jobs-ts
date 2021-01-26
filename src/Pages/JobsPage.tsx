import React, { useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { fetchData } from "../Api";
import JobListItem from "../Components/JobListItem";
import { Job, NO_JOBS_FOUND } from "../constants";
import JobsContext from "../context/JobsContext";

const JobsPage = () => {
  const { jobs, setJobs } = useContext(JobsContext);
  const history = useHistory();
  const [, , jobtitle] = history.location.pathname.split("/");
  const { url } = useRouteMatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (jobs) {
      if (Object.keys(jobs).includes(jobtitle)) {
        return setCurrentJobs(jobs[jobtitle]);
      }

      setIsLoading(true);
      const fetchJobs = async () => {
        try {
          const newJobs = await fetchData("description", jobtitle);
          setCurrentJobs(newJobs);
          if (newJobs === NO_JOBS_FOUND) {
            history.push("/nojobfound");
            return;
          }
          setJobs({ [jobtitle]: currentJobs });
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      };
      fetchJobs();
    }
  }, [currentJobs, jobs, jobtitle, setJobs, history]);

  return (
    <div className="bg-black bg-opacity-75 h-screen">
      <div className="">
        <h1 className="text-pink-600 text-3xl text-center pt-4">
          {isLoading
            ? "Counting..."
            : `${currentJobs.length} jobs as "${jobtitle}"
          have been found:`}
        </h1>
      </div>
      <button
        className="bg-blue-100 px-2 my-5 rounded-md hover:bg-blue-200 hover:text-gray-50"
        onClick={history.goBack}>
        Go back
      </button>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        currentJobs.map((job, index) => (
          <div key={job.id}>
            <JobListItem url={url} job={job} index={index} />
          </div>
        ))}
    </div>
  );
};

export default JobsPage;
