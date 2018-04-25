import React, {Component} from 'react';
import './Foto.css';

class Foto extends Component{
    render(){
        return (
            <div className="foto">
                <img src={this.props.imagem} />
                <p>{this.props.texto}</p>
            </div>
        );
    }
}

export default Foto;