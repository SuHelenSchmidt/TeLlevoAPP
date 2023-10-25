import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireTellevo } from '@angular/fire/compat';
@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor( public ngFireTellevo:AngularFireTellevo) { }

  async registerUser(email:string, password:string){
    return await this.ngFireTellevo.createUserWithEmailAndPassword(email,password)
  }

  async loginUser (email:string,password:string){
    return await this.ngFireTellevo.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireTellevo.sendPasswordResetEmail(email)
  }
  
  async signOut (){
    return await this.ngFireTellevo.signOut
  }

  async getProfile(){
    return await this.ngFireTellevo.currentUser
  }
}
