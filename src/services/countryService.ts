import axios from "axios";
import { countryApi } from './../utils/constants';

const countryService = {
  fetchAll() {
    return axios.get<Country[]>(`${countryApi}/all`);
  }
}

export default countryService;