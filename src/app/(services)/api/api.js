import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  const response = await axios.get("/character/2");
  return response.data;
};

export const fetchLocations = async () => {
  const response = await axios.get("/location/3");
  return response.data;
};
