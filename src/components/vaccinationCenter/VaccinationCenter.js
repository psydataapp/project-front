import { useEffect, useState } from "react";
import api from "../../api/opendata";
import KakaoMap from "./KakaoMap";
import { Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import VaccinationCenterTable from "./VaccinationCenterTable";
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
}));

const tranformdata = (source) => {
  if (source.length === 0) return [];

  const transdata = [];
  for (let s of source) {
    const item = {
      lat: parseFloat(s.lat),
      lng: parseFloat(s.lng),
      centerName: s.centerName,
      address: s.address,
      phoneNumber: s.phoneNumber,
    };
    transdata.push(item);
  }
  console.log(transdata);
  return transdata;
};

const Map = () => {
  const [source, setSource] = useState([]);
  // console.log(source);
  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchVaccinationCenterData();
      setSource(result.data);
    };
    getData();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Hidden mdDown>
          <Grid item lg={1} />
        </Hidden>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper}>
            <KakaoMap data={tranformdata(source)} />
          </Paper>
        </Grid>
        <Grid item lg={6}>
          <Paper
            className={classes.paper}
            style={{ overflowY: "scroll", maxHeight: "57vh" }}
          >
            <VaccinationCenterTable data={tranformdata(source)} />
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid lg={1} />
        </Hidden>
      </Grid>
    </div>
  );
};

export default Map;
