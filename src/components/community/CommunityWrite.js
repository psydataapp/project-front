import {
  Paper,
  TextField,
  Grid,
  Hidden,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
const CommunityWrite = () => {
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
    button: {
      marginTop: "10px",
      marginLeft: "5px",
    },
    textField: {
      width: "100%",
    },
    imgUploadBtn: {
      [theme.breakpoints.up("lg")]: {
        display: "flex",
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

  const [imgData, setImageData] = useState(null);
  const onChageImg = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("img", ImageData);
      console.log(formData);
    }
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
    const img = imgData;
    const writer = localStorage.getItem("nickname")
    history.push("/community");
    dispatch({
      type: "ADD_BOARD",
      payload: { title, content, time, img, writer },
    });
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
            <div className={classes.imgUploadBtn}>
              <Button>
                <label
                  for="input-file"
                  style={{ display: "flex", cursor: "pointer" }}
                >
                  <AddToPhotosIcon />
                  이미지첨부
                </label>
              </Button>
              <div>
                <img
                  src={imgData}
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                ></img>
              </div>
              <input
                type="file"
                style={{ display: "none" }}
                id="input-file"
                accept="image/*"
                onChange={onChageImg}
              />
            </div>
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
