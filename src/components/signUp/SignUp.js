import { Hidden, makeStyles } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import SignUpForm from "./SignUpForm";
const SignUp = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "80px",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={2} md={3} lg={4}></Grid>
        </Hidden>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper className={classes.paper}>
            <SignUpForm />
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={2} md={3} lg={4}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default SignUp;
