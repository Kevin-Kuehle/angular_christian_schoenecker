import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '@actor/models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable({ providedIn: 'root' })
export class AuthService {

  uid: Observable<string | null> = this.afAuth.authState.pipe(
    map(state => {

      if (!state) {
        return null;
      } else {
        return state.uid;
      }
    }));

  isAdmin: Observable<boolean> = this.uid.pipe(

    switchMap(uid => {
      if (!uid) {
        return of(false);
      } else {
        return this.db.object<boolean>('admin/' + uid).valueChanges();
      }
    })
  );



  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  login(email: string, passwort: string) {
    try {
      this.afAuth.signInWithEmailAndPassword(email, passwort);
    } catch (error) {
      console.log(` Error in loginFunction ${error.message} `);
    }
  }

  logout() {
    this.afAuth.signOut();
  }
}




