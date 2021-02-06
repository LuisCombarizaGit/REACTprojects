import axios from "axios";

// URL of API
const url = "https://covid19.mathdro.id/api";

// Asynchrounous function that returns the call fro the API
export const fetchData = async () => {
  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {}
};
