import React from "react";
import { Job } from "../constants";

interface Props {
  job: Job;
}

const JobDetail = ({ job }: Props) => {
  const {
    url,
    created_at,
    type,
    company,
    company_url,
    location,
    title,
    description,
    how_to_apply,
    company_logo,
  } = job;

  const createContent = (content: string) => ({ __html: content });

  return (
    <main className="px-10 pb-10" id="job-detail">
      <div>
        <h2 className="text-amber-700 text-bold text-2xl">
          Job Title: {title}
        </h2>
        <a
          className="text-blue-500 hover:text-blue-200 hover:transition duration-300 ease-in-out"
          href={url}
          target="_blank"
          rel="noreferrer">
          Original Link
        </a>
        <p>Created At: {created_at}</p>
        <strong>Type: {type}</strong>
        <p>Company: {company}</p>
        <a
          className="text-blue-500 hover:text-blue-200 hover:transition duration-300 ease-in-out company-url"
          href={company_url}>
          {company_url}
        </a>
        <p className="location">Location: {location}</p>
        <img className="w-32 my-5" src={company_logo} alt={company} />
      </div>

      <section
        className="description"
        dangerouslySetInnerHTML={createContent(description)}
      />
      <section
        className="how-to-apply"
        dangerouslySetInnerHTML={createContent(how_to_apply)}
      />
    </main>
  );
};

export default JobDetail;
