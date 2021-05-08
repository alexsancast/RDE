import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { LoadChildren } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../module/user.interface';
import { FireauthService } from '../services/fireauth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {} as User;
  constructor(  
    public login_fire2 :FireauthService ,
    public toastCtrl:ToastController ,
    private loading : LoadingController,
    private navegate : NavController

    ) {}
 
   



  async registere(user:User){
    if (this.formValidation()){
      //show loader
     let loader = this.loading.create({
        message:"bolas.."
      });

      (await loader ).present();

      try {

        await this.login_fire2.register(this.user.email, this.user.password).
        then(res =>console.log(res));

        //redirect
        this.navegate.navigateRoot("/principal");

      }
      catch (e) {
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
  
   


 
 
  


  }
  


