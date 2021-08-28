import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const useStyles = makeStyles((theme) => ({
    div: {
      display: "flex",
      flexDirection: "column",
    },
    textField: {
      margin: "10px",
    },
    button: {
      margin: "10px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.div}>
      <TextField
        label="ID"
        variant="outlined"
        className={classes.textField}
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className={classes.textField}
        label="Password"
        size="small"
        type="password"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        <Button variant="outlined" color="primary" className={classes.button}>
          LogIn
        </Button>
        <Link to="/signup">
          <Button variant="outlined" color="primary" className={classes.button}>
            SignUp
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
