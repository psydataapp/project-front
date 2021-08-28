import { Button, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const SignUpForm = () => {
  const useStyles = makeStyles((theme) => ({
    textField: {
      size: "small",
      margin: "10px",
    },
    button: {
      margin: "10px",
    },
    div: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <TextField label="이름" className={classes.textField} />
      <div style={{ display: "flex" }}>
        <TextField label="아이디" className={classes.textField} />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          size="small"
        >
          중복확인
        </Button>
      </div>
      <TextField
        label="비밀번호"
        className={classes.textField}
        type="password"
      />
      <TextField
        label="비밀번호확인"
        className={classes.textField}
        type="password"
      />
      <div>
        <Button className={classes.button} variant="outlined" color="primary">
          가입
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          onClick={() => {
            history.push("/login");
          }}
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
