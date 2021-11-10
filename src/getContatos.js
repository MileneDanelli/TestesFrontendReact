import axios from 'axios'

function getAnimes() {
    axios.get('http://localhost:8080/animes')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}

module.exports = {getAnimes}