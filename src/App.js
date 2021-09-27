import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Hidden,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import { Forum } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import { Suspense, lazy } from "react";
import MenuButton from "./components/menuButton/MenuButton";
import { useDispatch } from "react-redux";
import Home from "./components/home/Home";

const Community = lazy(() => import("./components/community/Community"));
const CommunityDetail = lazy(() =>
  import("./components/community/CommunityDetail")
);
const CommunityWrite = lazy(() =>
  import("./components/community/CommunityWrite")
);
const Login = lazy(() => import("./components/login/Login"));
const SignUp = lazy(() => import("./components/signUp/SignUp"));

const VaccinationCenter = lazy(() =>
  import("./components/vaccinationCenter/VaccinationCenter")
);
const drawerWidth = "240px";
const appBarHeight = "10px";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "100%",
    minHeight: appBarHeight,
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.down("md")]: {
      width: drawerWidth,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
      flexDirection: "row",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };
  useEffect(() => {
    if (localStorage.getItem("nickname") !== null) {
      setIsLogin(true);
    }
  }, []);
  const drawer = (
    <>
      <List component="nav" className={classes.list}>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>홈</ListItemText>
          </ListItem>
        </Link>
        <Link to="/vaccinationcenter" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>백신접종센터</ListItemText>
          </ListItem>
        </Link>
        <Link to="/community" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Forum />
            </ListItemIcon>
            <ListItemText>커뮤니티</ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <Router>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap className={classes.title}>
                Project
              </Typography>
              {!isLogin && (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button>Login</Button>
                </Link>
              )}

              {isLogin && <Button onClick={handleLogOut}>Logout</Button>}
            </Toolbar>
          </AppBar>
          <Hidden lgUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              classes={{ paper: classes.drawerPaper }}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </header>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Hidden mdDown>
              <MenuButton />
            </Hidden>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/community" component={Community} exact></Route>
              <Route
                path="/community/write"
                component={CommunityWrite}
                exact
              ></Route>
              <Route
                path="/community/:id"
                component={CommunityDetail}
                exact
              ></Route>
              <Route path="/login" component={Login} exact></Route>
              <Route path="/signup" component={SignUp} exact></Route>
              <Route
                path="/vaccinationcenter"
                component={VaccinationCenter}
              ></Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
