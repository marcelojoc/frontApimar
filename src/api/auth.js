import axios from "axios";

const apiKey = "3d43da18240a802341f993d06e9ec0c0";

const API_URL = `https://gateway.marvel.com:443/v1/public/`;

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
