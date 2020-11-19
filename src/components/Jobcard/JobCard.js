import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

// Style
import useStyles from "./jobcard.style";

const JobCard = ({ location, title, company, type }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          {/* createdAt */}
          <Typography
            gutterBottom
            className={classes.heading}
          >
            Type: {type}
          </Typography>

          {/* title */}
          <Typography
            variant="h4"
            className={classes.title}
          >
            {title}
          </Typography>

          {/* company */}
          <Typography className={classes.companyName}>
            {company}
          </Typography>

          {/* location */}
          <Typography variant="body2" component="p">
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default JobCard;
