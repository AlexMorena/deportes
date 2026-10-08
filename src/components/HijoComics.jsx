import { Component } from "react";

export default class HijoComics extends Component {

    obtenerFavorito = () => {
        this.props.favorito(this.props.comic.titulo);
    }

    eliminarComic = () => {
        this.props.delete(this.props.key);
    }

    pintarFavorito = () => {
        this.props.pintarFav(this.props.comic.titulo);
    }


    render() {
        return (
            <div>
                <h2>Titulo: {this.props.comic.titulo}</h2>
                <h2>Imagen:</h2>
                <img src={this.props.comic.imagen} style={{ width: "70px", height: "90px" }} />
                <h2>Descripcion: {this.props.comic.descripcion}</h2>
                <button onClick={() => {
                    this.obtenerFavorito();
                    this.pintarFavorito();
                }}>Favorito</button>
                <button onClick={this.eliminarComic}>Eliminar</button>
                <br></br>
                <br></br>
            </div>
        )
    }
}