import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import JobCard from "./components/Jobcard/JobCard";
import NavBar from "./components/Navbar/NavBar";
import axios from "axios";
import { Box, Grid, Paper } from "@material-ui/core";

const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
      );

      setJobs(result.data);
      // setIsLoading(false);
      console.log(result.data);
    };

    fetchItems();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Box style={{ margin: "1% 5%" }}>
        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={3}>
              <JobCard
                location={job.location}
                type={job.type}
                company={job.company}
                title={job.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MainPage;
