import axios from "axios";

const apiKey = process.env.VUE_APP_KEY;

const API_URL = process.env.VUE_APP_LINK;

async function getCharacters() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada. 🌵
  const config = {
    headers: { "Content-Type": "aplication/json" },
  };
  const query = "characters";
  // 🔥Hacemos una peticion POST
  // 🔥Le pasamos la URL como primer parámetro
  // 🔥Como segundo, el body, que es un FormData
  // 🔥  Y la configuración como tercer argumento
  return await axios.get(`${API_URL}${query}?apikey=${apiKey}`, config);
}

function getComics() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const config = {
    headers: { "Content-Type": "aplication/json" },
  };
  const query = "comics";
  // Hacemos una peticion POST
  // Le pasamos la URL como primer parámetro
  // Como segundo, el body, que es un FormData
  // Y la configuración como tercer argumento
  return axios.post(`${API_URL} ${query}?${apiKey} `, config);
}

export default { getCharacters, getComics };
