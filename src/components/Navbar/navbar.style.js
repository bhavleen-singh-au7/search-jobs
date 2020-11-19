const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: "5%",
    padding: "2% 0",
  },

  switch: {
    marginRight: "5%",
  },
}));

export default useStyles;
