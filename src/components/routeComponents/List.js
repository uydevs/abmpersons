import React,{Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import modify from './Modify';

import './css/List.css';

class List extends Component{

  static propTypes = {
    persons : PropTypes.array.isRequired,
    onDeletePerson: PropTypes.func.isRequired,
    onSelectPerson: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  handleShowPerson = (p) => {
    
  }

  
  render(){
    const {persons, onDeletePerson, onSelectPerson} = this.props;
    
    return(
      <div className="List">
          <h2>Personas Ingresadas</h2>
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Casado</th>
                <th></th>
              </tr>
              {persons.map((p,key) => <tr key={key}>
                <td>{p.name}</td>
                <td>{p.surname}</td>
                <td>{p.age}</td>
                <td>{String(p.married)}</td>
                <td><button onClick={()=> onDeletePerson(key)}>X</button></td>
                <td><button onClick={() => onSelectPerson(p)}>Modificar</button></td>
                </tr>)}
            </tbody>
          </table>
      </div>
    );
  }
}

export default withRouter(List);