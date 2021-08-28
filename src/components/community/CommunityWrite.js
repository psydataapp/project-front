import {
  Paper,
  TextField,
  Grid,
  Hidden,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const CommunityWrite = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "80px",
      },
    },
    button: {
      marginLeft: "5px",
    },
    textField: {
      [theme.breakpoints.down("sm")]: {
        width: "80vh",
      },
      [theme.breakpoints.up("lg")]: {
        width: "100vh",
      },
      [theme.breakpoints.down("xs")]: {
        width: "50vh",
      },
      [theme.breakpoints.down("md")]: {
        width: "100vh",
      },
    },
  }));

  const theme = createTheme();
  theme.typography.h6 = {
    fontSize: "1.2rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  };

  const classes = useStyles();

  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const history = useHistory();

  const add = () => {
    const title = titleRef.current.value;

    const content = contentRef.current.value;
    const today = new Date();
    const time = today.toLocaleDateString();
    history.push("/community");
    dispatch({ type: "ADD_BOARD", payload: { title, content, time } });
  };

  const cancel = () => {
    history.push("/community");
  };
  return (
    <div className={classes.root} style={{ display: "flex" }}>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              label="제목"
              size="small"
              className={classes.textField}
              inputRef={titleRef}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={add}
              className={classes.button}
            >
              저장
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={cancel}
              className={classes.button}
            >
              취소
            </Button>
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <TextField
              variant="outlined"
              multiline
              className={classes.textField}
              rows={15}
              placeholder="내용을 입력하세요"
              inputRef={contentRef}
            />
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <Button>
              <InsertDriveFileIcon align="left" />
              파일첨부
            </Button>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default CommunityWrite;
