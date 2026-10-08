import { Component } from "react";
import HijoMenu from "./HijoMenu";

export default class PadreMenu extends Component{

    state = {
        lista : ["Pizza","Sushi","Hamburguesa","Tacos"],
        plato: ""
    }

    obtenerPlato = (plato) => {
        this.setState({
            plato: plato
        })
    }

    añadirPlato = (plato) => {
        this.state.lista.push(plato)
    }


    render(){
        return(
            <div>
                <h1>Marchando una racion de {this.state.plato}</h1>
                {
                    this.state.lista.map((plato, index) => {
                        return (<HijoMenu plato={plato} key={index} metodoPadre={this.obtenerPlato} metodoPadre2={this.añadirPlato}/>)
                    })
                }
            </div>
        )
    }
}