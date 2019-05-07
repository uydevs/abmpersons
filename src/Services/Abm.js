//export const deletePerson = (_idPerson) => {
 // let person = persons.find(p => p.id === _idPerson);
 // persons.splice(_idPerson,1);
//}



export const newPerson = (_name, _surname, _age, _married) => {
  let newPerson = {
    name: _name,
    surname: _surname,
    age: _age,
    married: _married
  }
  return newPerson;
}


//splice no me sirve.
//variable global para eliminar por id contador.
//
