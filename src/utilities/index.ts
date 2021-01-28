import { Job } from "../constants";

export const getOneJob = (
  jobtitle: string,
  id: string,
  jobs: { [key: string]: Job[] }
) => jobs[jobtitle].filter((job) => job.id === id);

export const generateKeywords = (val: string) => {
  const regex = /\s+/;
  return val.trim().split(regex).sort().join("+");
};
