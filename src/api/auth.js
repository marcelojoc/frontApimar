import Api from "@/api/api";

async function getCharacters(search) {
  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
  // que necesitamos para hacer la llamada. 馃尩
  const query = 'characters?nameStartsWith='+ search
  // 馃敟Hacemos una peticion POST
  // 馃敟Le pasamos la URL como primer par谩metro
  // 馃敟Como segundo, el body, que es un FormData
  // 馃敟  Y la configuraci贸n como tercer argumento
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getComics() {
  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getCreators() {
  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getEvents() {
  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
  // que necesitamos para hacer la llamada.
  const query = "comics";
  const result = await Api.apiConnectionGeneral(query);
  return result;
}

async function getSeries() {
  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
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
