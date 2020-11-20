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
            Type: <strong>{type}</strong>
          </Typography>

          {/* title */}
          <Typography
            variant="h4"
            className={classes.title}
          >
            <strong>{title}</strong>
          </Typography>

          {/* company */}
          <Typography
            className={classes.companyName}
            color="primary"
          >
            Company: <strong>{company}</strong>
          </Typography>

          {/* location */}
          <Typography variant="body2" component="p">
            Location: <strong>{location}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default JobCard;
