import { useEffect, useState } from "react";
import api from "../../api/opendata";
import { makeStyles } from "@material-ui/core";
import { Grid, Hidden, Paper } from "@material-ui/core";
import TableChart from "./TableChart";
import BarChartSample from "./BarChart";
import SidoTableChart from "./SidoTableChart";

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

const transCovid19Data = (covid19Source) => {
  if (covid19Source.length === 0) return [];

  const transdata = [];
  const item = {
    decideCnt: covid19Source[0].decideCnt,
    clearCnt: covid19Source[0].clearCnt,
    deathCnt: covid19Source[0].deathCnt,
    examCnt: covid19Source[0].examCnt,
  };
  transdata.push(item);
  // console.log(transdata);
  return transdata;
};

const transCovid19SidoData = (covid19SidoSource) => {
  if (covid19SidoSource.length === 0) return [];
  const sumData = covid19SidoSource.filter(function (sData) {
    return sData.gubun === "합계";
  });

  // console.log(sumData);
  const transdata = [];
  for (let data of sumData) {
    const item = {
      "신규 확진자": parseInt(data.incDec),
      date: data.createDt.substr(5, 5),
    };
    transdata.push(item);
  }
  // console.log(transdata);
  return transdata;
};

const covid19SidoTableData = (covid19SidoSource) => {
  if (covid19SidoSource.length === 0) return [];
  const sidoData = covid19SidoSource.slice(1, 18);
  // console.log(data);

  const transdata = [];
  for (let data of sidoData) {
    const item = {
      gubun: data.gubun,
      incDec: parseInt(data.incDec),
      defCnt: parseInt(data.defCnt),
    };
    transdata.push(item);
  }
  // console.log(transdata);
  return transdata;
};
const Home = () => {
  const classes = useStyles();

  const [covid19Source, setCovid19Source] = useState([]);
  const [covid19SidoSource, setCovid19SidoSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchCovid19Data();
      setCovid19Source(result.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchCovid19SidoData();
      setCovid19SidoSource(result.data);
    };
    getData();
  }, []);

  // console.log(transdata);

  // console.log(covid19Source);
  // console.log(covid19SidoSource);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Hidden mdDown>
          <Grid item lg={2} />
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper className={classes.paper}>
            <TableChart data={transCovid19Data(covid19Source)} />
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid lg={2} />
        </Hidden>
        <Hidden mdDown>
          <Grid item lg={2} />
        </Hidden>
        <Grid item xs={12} sm={6} lg={5}>
          <Paper className={classes.paper} style={{ height: "50vh" }}>
            <BarChartSample data={transCovid19SidoData(covid19SidoSource)} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Paper
            className={classes.paper}
            style={{ height: "50vh", overflowY: "scroll" }}
          >
            <SidoTableChart data={covid19SidoTableData(covid19SidoSource)} />
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid lg={2} />
        </Hidden>
      </Grid>
    </div>
  );
};

export default Home;
