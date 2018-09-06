import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    { name: 'Ryan', lastName: 'Anderson', age: 28 },
    { name: 'John', lastName: 'Mayers', age: 22 },
    { name: 'Cameron', lastName: 'Tucker', age: 34 }
  ];

  addUser(name, lastName, age): void
  {
    this.users.push(
      {
        name: name.value,
        lastName: lastName.value,
        age: age.value
      }
    );

    name.value = '';
    lastName.value = '';
    age.value = '';
  }

  editUser(user: User): void {
    
  }

  deleteUser(user: User): void {
    //Tenemos dos formas de llevar esta funcionalidad.
    //1º: Eliminarlo de la lista filtrandola por aquellos elementos que no sean el usuario a eliminar y re-asignar 
    //a si misma esta lista
    // this.users = this.users.filter(u => u != user);

    //2ª: Splice del elemento cuyo índice sea coincidente con el usuario a eliminar
    this.users.splice(this.users.indexOf(user), 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
