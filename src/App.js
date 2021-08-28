import React, { useState } from "react";
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
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import MenuButton from "./components/menuButton/MenuButton";
const Community = lazy(() => import("./components/community/Community"));
const CommunityDetail = lazy(() =>
  import("./components/community/CommunityDetail")
);
const CommunityWrite = lazy(() =>
  import("./components/community/CommunityWrite")
);

const Login = lazy(() => import("./components/login/Login"));
const SignUp = lazy(() => import("./components/signUp/SignUp"));
const drawerWidth = "240px";
const appBarHeight = "10vh";
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
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <Link to="/community" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Forum />
            </ListItemIcon>
            <ListItemText>게시판</ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <Provider store={store}>
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
                  Community
                </Typography>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button>Login</Button>
                </Link>
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
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
