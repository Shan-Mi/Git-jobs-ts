import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../constants";

interface Props {
  url: string;
  job: Job;
  index: number;
}

const JobListItem = ({ url, job, index }: Props) => (
  <Link
    to={`${url}/${job.id}`}
    key={job.id}
    className="pl-5 hover:text-blue-200 hover:transition duration-300 ease-in-out ">
    - {index + 1}: {job.title}
  </Link>
);

export default JobListItem;
