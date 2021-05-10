import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

import {User} from 'src/app/module/user.interface'
import { FireauthService } from 'src/app/services/fireauth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  prueba :string;
  
  constructor(

    public loginfire :FireauthService ,
    public toastCtrl : ToastController,
    public loading : LoadingController,
    public navegate : NavController,
  

  
  ) { }

  ngOnInit() {
  }

  async login(user:User){
    if (this.formValidation()){
      //show loader
     let loader = this.loading.create({
        message:"Cargando"
      });

      (await loader ).present();

        try {
          this.loginfire.onLogin(this.user.email, this.user.password).
          then(res =>{this.navegate.navigateRoot("/principal")})
          .catch(err=>alert("Usuario no existe"));
          
        }    catch (e) {
          this.showToast(e);
        }
        
        (await loader).dismiss();

      
    }
  }
 formValidation()
 {
   if(!this.user.email){
     this.showToast("Enter Mail");
     return false;
   }

   if(!this.user.password){
     this.showToast("Enter Password");
     return false;
   }

   return true;
 }
 showToast(messege:string){

   this.toastCtrl.create({
     message:messege ,
     duration:3000
   }).then(res=>res.present());
 }


 
 searchService(prueba:string){
   console.log(prueba);

 }

}
