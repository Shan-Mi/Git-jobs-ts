import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchData } from "../Api";
import Header from "../Components/Header";
import SearchingForm from "../Components/SearchingForm";
import { NO_JOBS_FOUND } from "../constants";
import JobsContext from "../context/JobsContext";
import { generateKeywords } from "../utilities";

const FrontPage = () => {
  const descRef = useRef<HTMLInputElement>(null);
  const { jobs, setJobs } = useContext(JobsContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const originalKeywords = descRef.current?.value;
      let generatedKeywords: string;
      if (originalKeywords) {
        generatedKeywords = generateKeywords(originalKeywords);

        if (jobs) {
          if (Object.keys(jobs).includes(generatedKeywords)) {
            history.push(`/jobs/${generatedKeywords}`);
            return;
          }
        }

        const newJobs = await fetchData("description", generatedKeywords);
        if (newJobs === NO_JOBS_FOUND) {
          history.push("/nojobfound");
          return;
        }

        setJobs({ ...jobs, [generatedKeywords]: newJobs });
        setIsLoading(false);
        history.push(`/jobs/${generatedKeywords}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      {!isLoading && (
        <SearchingForm handleSubmit={handleSubmit} descRef={descRef} />
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default FrontPage;
