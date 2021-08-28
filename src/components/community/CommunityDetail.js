import {
  Grid,
  Paper,
  makeStyles,
  Hidden,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const CommunityDetail = () => {
  const { id } = useParams();
  console.log(id);
  const board = useSelector(
    (state) => state.community.filter((board) => board.id === parseInt(id))[0]
  );
  console.log(board);
  console.log(board.title);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),

      color: theme.palette.text.secondary,
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "80px",
      },
    },
    button: {
      marginTop: "5px",
      marginRight: "5px",
    },
  }));
  const titleRef = useRef();
  const contentRef = useRef();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(board.isEdit);

  const remove = (id) => {
    dispatch({ type: "REMOVE_BOARD", payload: id });
    history.push("/community");
  };

  const save = (id) => {
    const today = new Date();
    const time = today.toLocaleDateString() + "(수정됨)";
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    dispatch({
      type: "MODIFY_BOARD",
      payload: { id, title, content, time },
    });
  };

  return (
    <div className={classes.root} style={{ display: "flex" }}>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper className={classes.paper} style={{ display: "flex" }}>
            {!isEdit && (
              <Typography variant="h6" color="textPrimary" align="left">
                {board.title}
              </Typography>
            )}

            {isEdit && (
              <TextField
                variant="outlined"
                defaultValue={board.title}
                size="small"
                style={{ width: "500px" }}
                inputRef={titleRef}
              />
            )}
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper
            className={classes.paper}
            style={{ height: "50vh", display: "flex" }}
          >
            {!isEdit && (
              <Typography
                variant="body1"
                color="textPrimary"
                align="left"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {board.content}
              </Typography>
            )}

            {isEdit && (
              <TextField
                variant="outlined"
                multiline
                style={{ width: "100vh" }}
                rows={15}
                defaultValue={board.content}
                inputRef={contentRef}
              />
            )}
          </Paper>
          {!isEdit && (
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                setIsEdit(true);
              }}
            >
              수정
            </Button>
          )}
          {!isEdit && (
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                remove(board.id);
              }}
            >
              삭제
            </Button>
          )}
          {!isEdit && (
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {
                history.push("/community");
              }}
            >
              목록
            </Button>
          )}

          {isEdit && (
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {
                save(board.id);
                setIsEdit(false);
              }}
            >
              저장
            </Button>
          )}
          {isEdit && (
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              취소
            </Button>
          )}
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default CommunityDetail;
