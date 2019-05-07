//Dependecies
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import persons from '../Data/Persons';

//Components
import Header from './Header';

//components para routear
import New from './routeComponents/New';
import Delete from './routeComponents/Delete';
import Modify from './routeComponents/Modify';
import Page404 from './routeComponents/Page404';
import List from './routeComponents/List.js';
import { list } from 'postcss';


class App extends Component{

  static propTypes = {
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      persons, //persons:persons
      selectedPerson: null,
    }
  }

  handleAddPerson = (p) => {
    const listPersons = [...this.state.persons, p];
    //creo una nueva lista  con la anterior y le agrego p al final
    //const l = this.state.persons.concat([p]); dada una lista y otra lista las junta.
    this.setState({persons:listPersons});
    this.props.history.push("/"); // esto es para redirigir
  }

  handleDeleteClick = (index) => {
    // splice con indice y numero de las personas que quiero eliminar.
    //hacer la copia del listado y a ese listado splice y luego setState
    const listPersons = [...this.state.persons]
    listPersons.splice(index,1);
    this.setState({persons:listPersons});
    this.props.history.push("/");
  }

  handleSelectPerson = (p) => {
    this.setState({selectedPerson: p});
    this.props.history.push("/Modify");
  }

  handleModifyPerson = (newName, newSurname, newAge) => {
    if(newName!= "" && newSurname != "" && newAge != ""){

    //personToModify no se puede cambiar derecho. Se estaria mutando el estado.
    let personToModify = this.state.persons.find((p) => p.name===this.state.selectedPerson.name);
    const modifiedPerson = {
      ...personToModify, 
      name: newName,
      surname: newSurname,
      age: newAge};


      const modifiedListPersons = this.state.persons.map((p) => {
        if(p!== personToModify){
          return p;
        }
        else{
          return modifiedPerson;
        }
      });

      this.props.history.push("/");
      this.setState({persons:modifiedListPersons});

    }    
    
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render = {() => <List persons={this.state.persons} onSelectPerson={this.handleSelectPerson} onDeletePerson={this.handleDeleteClick}/>}></Route>
          <Route exact path="/Delete" render={() => <Delete/>}></Route>
          <Route exact path="/Modify" render={() => <Modify onModifyPerson={this.handleModifyPerson} selectedPerson={this.state.selectedPerson}/>}></Route>
          <Route exact path="/New" render={() => <New onAddPerson={this.handleAddPerson}/>}></Route>
          <Route render={() => <Page404/>}></Route>
        </Switch>
      </div>
  );
}

//se pasa la funcion como prop. Primero se carga la lista en el state por eso esta en
//el constructor para que se haga primero.
//Luego cuando entra en New, este tiene acceso a la funcion que actualiza el state del padre (App).


}
export default withRouter(App);
