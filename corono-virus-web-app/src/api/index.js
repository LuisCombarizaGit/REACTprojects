import axios from "axios";

// URL of API
const url = "https://covid19.mathdro.id/api";

// Asynchrounous function that returns the call fro the API
export const fetchData = async () => {
  try {
      
    // Destructure data to only use the data needed in the application
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
