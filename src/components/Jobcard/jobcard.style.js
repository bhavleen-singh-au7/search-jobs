const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  card: {
    height: "100%",
    margin: "1%",
  },
  heading: {
    fontSize: 14,
  },
  title: {
    fontWieght: "bold",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

export default useStyles;
