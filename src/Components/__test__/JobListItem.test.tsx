import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Link } from "react-router-dom";
import { BASE_URL, JOB_OBJECT } from "../../constants";
import JobListItem from "../JobListItem";

describe("Test for JobListItem component", () => {
  let JobListItemWrapper: any;
  let count = 1;

  beforeEach(() => {
    JobListItemWrapper = mount(
      <BrowserRouter>
        <JobListItem job={JOB_OBJECT} url={BASE_URL} index={count + 1} />
      </BrowserRouter>
    );
  });

  it("should render JobListItem component with Link", () => {
    expect(JobListItemWrapper.find(Link)).toBeTruthy();
  });

  it("should contain correct url for this job", () => {
    const testUrl = `${BASE_URL}/${JOB_OBJECT.id}`;
    expect(JobListItemWrapper.find(Link).props().to).toBe(testUrl);
  });

  it("should render correct job title", () => {
    expect(JobListItemWrapper.find(Link).text()).toContain(
      `${JOB_OBJECT.title}`
    );
  });
});
