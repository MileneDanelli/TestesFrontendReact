import React, { Component } from 'react'
import api from './api'

class Lista extends Component {

    state = {
        animes: [],
    }
    
    async componentDidMount() {
        const response = await api.get('animes', {headers: {'Access-Control-Allow-Origin' : '*'}});
        console.log(response);
        this.setState({ animes: response.data });
    }


    render() {
        const { animes } = this.state;

        return (
            <>
                <h1>Listar os Animes</h1>
                {animes.map(anime => (
                    <li key={anime.id}>
                        <h2>
                            <strong>Título: </strong>
                            {anime.nome}
                        </h2>
                        <p>
                            {anime.descricao}
                        </p>
                    </li>
                ))}
            </>
        )
    }
}

export default Lista
