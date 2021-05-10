import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'



import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(private fauth: AngularFireAuth) { }

   onRegister(mail:string , password:string){
   
    const usuario =this.fauth.createUserWithEmailAndPassword(mail,password);
    return usuario
   }


     async getCurrentAth(){
        const user = await this.fauth.currentUser
         if (user === undefined){
           return null;

         }else {
           return user.uid;
         }
     }

   onLogin(user:string,password:string){
     return new  Promise((resolve,rejected)=>{
      this.fauth.signInWithEmailAndPassword(user,password).
      then(user=>{resolve(user);
      }).catch(err=>rejected(err));
     })
      
     
    
      
      };
     

    


   

   
  
 }

 

