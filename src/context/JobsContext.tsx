import React, { createContext, useState } from "react";
import { Job } from "../constants";

interface IJobs {
  jobs?: { [key: string]: Job[] } | null;
  setJobs: React.Dispatch<React.SetStateAction<{}>>;
}

export const JobsContext = createContext({} as IJobs);

export const GlobalContext: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<{ [key: string]: Job[] }>({});

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
