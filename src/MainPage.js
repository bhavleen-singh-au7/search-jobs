import React, { Fragment } from "react";
import JobCard from "./components/JobCard";
import NavBar from "./components/NavBar";

const MainPage = () => {
  return (
    <Fragment>
      <NavBar />
      <h1>Application</h1>
      <JobCard />
    </Fragment>
  );
};

export default MainPage;
