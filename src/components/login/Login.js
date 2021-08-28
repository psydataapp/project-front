import { Grid, Paper, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LoginForm from "./LoginForm";
const Login = () => {
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
          <Grid item sm={2} md={3} lg={3}></Grid>
        </Hidden>

        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Paper className={classes.paper}>
            <LoginForm />
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={2} md={3} lg={3}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Login;
