import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(3),
      },
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/" className={classes.link}>
        <Button>홈</Button>
      </Link>
      <Link to="/community" className={classes.link}>
        <Button>커뮤니티</Button>
      </Link>
      <Link className={classes.link}>
        <Button>상품리뷰</Button>
      </Link>
    </div>
  );
};

export default MenuButton;
