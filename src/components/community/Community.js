import { Grid, Hidden, makeStyles, Paper, Divider } from "@material-ui/core";
import CommunityHead from "./CommunityHead";
import CommunityList from "./CommunityList";

const Community = () => {
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
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2} />
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper className={classes.paper}>
            <CommunityHead />
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <CommunityList />
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2} />
        </Hidden>
      </Grid>
    </div>
  );
};

export default Community;
