import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './css/New.css';

import {newPerson} from '../../Services/Abm';


class New extends Component{

  static propTypes = {
    onAddPerson : PropTypes.func.isRequired,
    
  }

  constructor(props){
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: 0,
      married: true
    };
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeSurname = (event) => {
    this.setState({surname: event.target.value})
  }

  handleChangeAge = (event) => {
    this.setState({age: Number(event.target.value)})
  }

  handleClick = () => {
    const _newPerson = newPerson(this.state.name, this.state.surname, this.state.age, true)
    this.props.onAddPerson(_newPerson);
  }


  render(){
    //console.log(this.state.name);
    //console.log(this.state.surname);
    //console.log(this.state.age);
    return(
      <div className="New">
        <h2>Agregar Persona</h2>
        <input type="text" placeholder="Nombre" onChange={this.handleChangeName}></input>
        <input type="text" placeholder="Apellido" onChange={this.handleChangeSurname}></input>
        <input type="number" placeholder="Edad" onChange={this.handleChangeAge}></input>
        <label>Casado:</label><br/>
        <label>SI</label>
        <input type="radio" name="casado"></input>
        <label>NO</label>
        <input type="radio" name="casado"></input><br/>
        <button onClick={this.handleClick}>Guardar</button>
      </div>
    );
  }
}

export default withRouter(New);