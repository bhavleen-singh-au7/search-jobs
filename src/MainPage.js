import React, { Fragment } from "react";
import JobCard from "./components/Jobcard/JobCard";
import NavBar from "./components/Navbar/NavBar";

const MainPage = () => {
  return (
    <Fragment>
      <NavBar />
      
      <JobCard
        location="delhi"
        type="full time"
        company="My llc"
        title="Full Stack Engineer"
      />
    </Fragment>
  );
};

export default MainPage;
