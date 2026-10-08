import { Component } from "react";

export default class HijoMenu extends Component{

    elegirPlato = () => {
        this.props.metodoPadre(this.props.plato)
    }

    platoAñadido = () => {
        this.props.metodoPadre2("platonuevo")
    }

    render () {
        return (
            <div>
                <h3>Plato: {this.props.plato}</h3>
                <button onClick={this.elegirPlato}>Pedir</button>
                <button onClick={this.platoAñadido}>Añadir</button>
            </div>
        )
    }
}