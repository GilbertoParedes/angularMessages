import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor() { 

    let usuario1: User = {
      nick: 'Mono uno',
      age: 24,
      email: 'mono1@marivalaccess.com',
      friend: true,
      uid: 1
   };

   let usuario2: User = {
    nick: 'Mono dos',
    age: 24,
    email: 'mono2@marivalaccess.com',
    friend: true,
    uid: 2
  };
 
  let usuario3: User = {
    nick: 'Mono tres',
    age: 24,
    email: 'mono3@marivalaccess.com',
    friend: false,
    uid: 3
  };

  let usuario4: User = {
    nick: 'Mono cuatro',
    age: 24,
    email: 'mono4@marivalaccess.com',
    friend: true,
    uid: 4
  };

  let usuario5: User = {
    nick: 'Mono 5',
    age: 24,
    email: 'mono5@marivalaccess.com',
    friend: false,
    uid: 5
  };

    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];

  }

  getFriends() {
    return this.friends;
  }
}
