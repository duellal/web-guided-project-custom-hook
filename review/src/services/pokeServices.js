import axios from 'axios';
import data from "../../data";

const getPokemen = () => {
   return data
}

//Below returns a Promise
// .then()'s can be chained
// ex:
// const getPokemonData = (id) => {
//   return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then((res) => {
//       return (res.data);
//     })
//     .then(data => {
//       console.log(data)
//     })
//     .then(data => {
//       return data[0]
//     })
// }

const getPokemonData = (id) => {
   return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
         return (res.data);
      })
}

export { getPokemen, getPokemonData }