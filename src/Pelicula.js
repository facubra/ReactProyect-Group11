import React from 'react';

class Pelicula extends React.Component {
    render() {
        return (
            <div className="catalogo">
                <div className="pelicula">
                    <div>
                        <p className="nombrePelicula">{this.props.nombrePelicula}</p>
                    </div>
                    <div className="itemPelicula1">

                        <div>
                            <img className="cartel" src={this.props.img} alt="cartel-peli" />
                        </div>
                        <div>
                            <p className="infoPelicula">
                                {this.props.directorPelicula} <br />
                                {this.props.repartoPelicula} <br />
                                {this.props.generoPelicula} <br />
                                {this.props.duracionPelicula}<br />
                                {this.props.clasificacionPelicula} <br />
                                {this.props.sinopsisPelicula} <br />
                                <iframe width="560" height="315" src={this.props.linkPelicula}
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pelicula;
