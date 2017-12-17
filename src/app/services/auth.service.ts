import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('%c [ OK] ', 'background: green; color: white; font-size:22px;');
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('%c [ AuthService signup ERROR] ', 'background: red; color: white; font-size:22px;');
        console.log('Something went wrong:',err.message);
        console.log(err);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('%c [ OK] ', 'background: green; color: white; font-size:22px;');
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('%c [ AuthService login ERROR] ', 'background: red; color: white; font-size:22px;');
        console.log('Something went wrong:',err.message);
        console.log(err);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  test(){
    console.log('%c [ OK auth test ] ', 'background: green; color: white; font-size:22px;');
  }

}