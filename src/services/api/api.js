import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get("/character/?page=1");
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const fetchLocations = async () => {
  try {
    const response = await axios.get("/location/3");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchOneCharacter = async (id) => {
  try {
    const response = await axios.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
