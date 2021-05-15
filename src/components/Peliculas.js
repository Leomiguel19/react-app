import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';
class Peliculas extends Component {
    state = {

    }

    favorita = (peli) => {
        this.setState({
            favorita: peli
        })
    }

    componentDidMount() {
        //alert("Ya se monto el componente")
    }

    componentWillMount() {
        //alert("Se va a montar el componente")
        this.setState({
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
            name: 'Leonardo Guilarte',
            favorita: {}
        })
    }

    render() {
        let pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        let favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="Favorita" style={pStyle}>
                    <strong>La película favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (
                <p>NO HAY PELICULA FAVORITA</p>
            )
        }

        return (
            <div>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de Peliculas</h2>
                        <p>Selección de las peliculas favoritas de {this.state.name}</p>

                        {/*this.state.favorita.titulo ? (
                    <p className="Favorita" style={pStyle}>
                        <strong>La película favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                ) : (
                    <p>NO HAY PELÍCULA FAVORITA</p>
                )
                */}
                        {favorita}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar />

                </div>
            </div>
        )
    }
}

export default Peliculas;