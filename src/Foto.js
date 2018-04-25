import React, {Component} from 'react';
import './Foto.css';

class Foto extends Component{
    componentWillMount = () =>{
        this.setState({
            classes: 'foto'
        });
    }

    mostrarNome = () => {
        this.setState({classes: 'foto ativa'});
    }

    ocultarNome = () => {
        this.setState({classes: 'foto'});
    }

    render = () => {
        return (
            <div className={this.state.classes} onMouseOver={this.mostrarNome} onMouseLeave={this.ocultarNome}>
                <img src={this.props.imagem} />
                <p>{this.props.texto}</p>
            </div>
        );
    }
}

export default Foto;