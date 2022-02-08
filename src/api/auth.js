import Api from "@/api/api";

async function getCharacters(search) {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada. 🌵
  const query = 'characters?nameStartsWith='+ search
  // 🔥Hacemos una peticion POST
  // 🔥Le pasamos la URL como primer parámetro
  // 🔥Como segundo, el body, que es un FormData
  // 🔥  Y la configuración como tercer argumento
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getComics() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getCreators() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getEvents() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getSeries() {
  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}





async function getCharacterById(id){

  return id
  // const config = {
  //   headers: { "Content-Type": "aplication/json" },
  // };
  // const query = `characters/${id}`;
  // return await axios.get(`${API_URL}${query}?apikey=${apiKey}`, config);

}

// async function apiConnectionGeneral(query){

//   const config = {
//     headers: { "Content-Type": "aplication/json" },
//   };

//   return await axios.get(`${API_URL}${query}?apikey=${apiKey}`, config);

// }

export default { getCharacters, getComics, getCharacterById, getSeries, getEvents , getCreators};
