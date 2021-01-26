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
    <main id="job-detail">
      <div>
        <h2>Job Title: {title}</h2>
        <a href={url} target="_blank" rel="noreferrer">
          Original Link
        </a>
        <p>Created At: {created_at}</p>
        <strong>Type: {type}</strong>
        <p>Company: {company}</p>
        <a href={company_url} className="company-url">
          {company_url}
        </a>
        <p className="location">Location: {location}</p>
        <img src={company_logo} alt={company} />
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
