import React, { Component } from 'react';
import Pelicula from './Pelicula';
class Peliculas extends Component {
    state = {
        peliculas: [
            {
                titulo: 'Demon Slayer: Mugen Train',
                image: 'https://images-na.ssl-images-amazon.com/images/I/91qGYZ1BmOL._AC_SY679_.jpg'
            },
            {
                titulo: 'The Silence of the Lambs',
                image: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg'
            },
            {
                titulo: 'The Karate Kid',
                image: 'https://image.tmdb.org/t/p/w1280/x2zD90hccwLPSvcUgJ6KhwLW8KA.jpg'
            },
            {
                titulo: 'La La Land',
                image: 'https://premios.atrae.org/wp-content/uploads/2018/09/LA-LA-LAND.jpg'
            },
            {
                titulo: 'Avengers: EndGame',
                image: 'https://lumiere-a.akamaihd.net/v1/images/690x0w_f1b0509a.jpeg?region=0%2C0%2C690%2C1035'
            },
            {
                titulo: 'Captain America: Civil War',
                image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/bf/Captain_America_Civil_War_-_Poster_definitivo.png/revision/latest?cb=20191029195149&path-prefix=es'
            },
        ],
        name: 'Leonardo Guilarte'
    }
    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.name}</p>

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula key={i} pelicula={pelicula}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Peliculas;