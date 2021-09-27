import axios from "axios";

const openDataApi = {
  fetchCovid19Data: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/covid19`),
  fetchCovid19SidoData: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/covid19sido`),
  fetchVaccinationCenterData: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/vaccinationcenter`),
};

export default openDataApi;
