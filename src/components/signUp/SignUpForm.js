import { Button, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const userIdRef = useRef();
  const nicknameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const signUp = (e) => {
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;
    const userId = userIdRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
      dispatch({ type: "SIGN_UP", payload: { nickname, userId, password } });
      history.push("/login");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <div className={classes.div}>
      <TextField
        label="닉네임"
        className={classes.textField}
        inputRef={nicknameRef}
      />
      <div style={{ display: "flex" }}>
        <TextField
          label="아이디"
          className={classes.textField}
          inputRef={userIdRef}
        />
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
        inputRef={passwordRef}
      />
      <TextField
        label="비밀번호확인"
        className={classes.textField}
        type="password"
        inputRef={confirmPasswordRef}
      />
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={signUp}
        >
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
