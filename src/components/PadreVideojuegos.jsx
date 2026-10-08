import { Component } from "react";
import HijoVideojuegos from "./HijoVideojuegos";

export default class PadreVideojuegos extends Component{

lista = ["GTA", "Call Of Duty","Minecraft","Fifa"]

state = {
    favorito : ""
}

mostrarFavorito = (juegoFavorito) => {
    this.setState({
        favorito : juegoFavorito
    })
}

    render(){
        return(
            <div>
                <h1>Padre videojuegos</h1>
                <h2>Su videojuego favorito es: {this.state.favorito}</h2>
                {
                    this.lista.map((juego, index) => {
                        return ( <HijoVideojuegos juego={juego} key={index} ejecutarMetodo={this.mostrarFavorito}
                        />)
                    })
                }
            </div>
        )
    }
}