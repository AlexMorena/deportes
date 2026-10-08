import { Component } from "react";

export default class HijoVideojuegos extends Component{

    seleccionarFavorito = () => {
        this.props.ejecutarMetodo(this.props.juego)
    }

    render(){
        return(
            <div>
                <h3 style={{color: "red"}}>Juego: {this.props.juego}</h3>
                <button onClick={this.seleccionarFavorito}>
                Favorito
                </button>
            </div>
        )
    }
}