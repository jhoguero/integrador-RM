const axios = require("axios");



const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((reponse) => reponse.data)
    .then((data) => {
      let char = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name
      };

      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(char));
    })
    .catch(err =>
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(`No se entro el personaje con id: ${id}`)
    );
}







module.exports = getCharDetail