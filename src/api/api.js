import axios from "axios";

const apiKey = process.env.VUE_APP_KEY;

const API_URL = process.env.VUE_APP_LINK;


async function apiConnectionGeneral(query){

    const config = {
      headers: { "Content-Type": "aplication/json" },
    };
  
    return await axios.get(`${API_URL}${query}?apikey=${apiKey}`, config);
  
}

export default { apiConnectionGeneral };