import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Modify extends Component{
  static propTypes ={
    selectedPerson: PropTypes.object.isRequired,
    onModifyPerson: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state ={
      newName:"",
      newSurname:"",
      newAge: 0,
    }
  }

  handleChangeAge = (event) => {
    this.setState({newAge:event.target.value})
  }

  handleChangeName = (event) => {
    this.setState({newName:event.target.value})
  }

  handleChangeSurname = (event) => {
    this.setState({newSurname:event.target.value})
  }

  render(){
    const {selectedPerson, onModifyPerson} = this.props;

    return(
      <div className="Modify">
        <h2>Modificar Persona</h2>
        <label>{selectedPerson.name + " "}</label>
        <label>{selectedPerson.surname + " "}</label>
        <label>{selectedPerson.age + " años"}</label>
        <h3>Nuevos Datos</h3>
        <input type="text" placeholder="Nombre" onChange={this.handleChangeName}></input>
        <input type="text" placeholder="Apellido" onChange={this.handleChangeSurname}></input>
        <input type="Number" placeholder="Edad" onChange={this.handleChangeAge}></input>
        <button onClick={()=>onModifyPerson(this.state.newName, this.state.newSurname, this.state.newAge)}>Guardar</button>

      </div>
    );
  }
}

export default Modify;
