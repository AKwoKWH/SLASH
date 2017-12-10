import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {}

  FirebaseSignInWithFacebook() {
    console.log('function FirebaseSignInWithFacebook Called');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    firebase.auth().getRedirectResult().then(function(authData) {
	    console.log(authData);
    }).catch(function(error) {
	    console.log(error);
    });
  }

  FirebaseSignOut() {
    console.log('function FirebaseSignOut Called');
    this.afAuth.auth.signOut();
  }



}