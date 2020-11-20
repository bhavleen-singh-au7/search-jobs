import React, { Fragment, useEffect } from "react";
import JobCard from "./components/Jobcard/JobCard";
import NavBar from "./components/Navbar/NavBar";
import axios from "axios";

const MainPage = () => {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        "https://jobs.github.com/positions.json",
        {
          headers: {
            "Access-Control-Allow-Origin":
              "http://localhost:3000",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );

      console.log(result);
    };

    fetchItems();
  }, []);

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
