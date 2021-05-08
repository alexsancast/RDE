import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'



import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(private fauth: AngularFireAuth) { }

   register(username:string , password:string){
   
    const usuario =this.fauth.createUserWithEmailAndPassword(username,password);
    return usuario
   }

   onLogin(user:string,password:string){
     return new  Promise((resolve,rejected)=>{
      this.fauth.signInWithEmailAndPassword(user,password).
      then(user=>{resolve(user);
      }).catch(err=>rejected(err));
     })
      
     
    
      
      };
     

    


   

   
  
 }

 

