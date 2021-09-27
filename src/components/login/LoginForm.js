import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
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
  const userIdRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handleLogIn = () => {
    const userId = userIdRef.current.value;
    const password = passwordRef.current.value;

    dispatch({ type: "LOG_IN", payload: { userId, password } });
  };

  const classes = useStyles();
  return (
    <div className={classes.div}>
      <TextField
        label="ID"
        variant="outlined"
        className={classes.textField}
        size="small"
        inputRef={userIdRef}
      />
      <TextField
        className={classes.textField}
        label="Password"
        size="small"
        type="password"
        variant="outlined"
        inputRef={passwordRef}
      />
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleLogIn}
        >
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
