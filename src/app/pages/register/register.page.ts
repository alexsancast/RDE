import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { FireauthService } from 'src/app/services/fireauth.service';
import {User} from 'src/app/module/user.interface';
import {Person} from 'src/app/module/person.interface'
import { FirestorageService } from 'src/app/services/firestorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  persona = "/persona";
  

  user:User ={
    uid: this.firestore.getId(),
    email: '',
    password: '',
    idPerson:'' ,

  }

  person:Person={

    id:'',
    name:'',
    last_name:''
  }
  constructor(
    public fireauth:FireauthService,
    public toastCtrl: ToastController,
    public loadingC : LoadingController,
    public firestore: FirestorageService,
    public route: NavController

  ) { }

  ngOnInit() {
  }


async register(){
  if (this.formValidation()){
    let lading = this.loadingC.create({
      message:'Cargando',
      duration:400,
    });

    (await lading).present();

    try{

      this.fireauth.onRegister(this.user.email,this.user.password).then((data)=>{
        this.person.id=data.user.uid;
        this.createPerson();
        this.route.navigateRoot("/principal")
      })

    }catch(e){console.log(e)};

    


  }
  return false;
}

async createPerson(){
  this.firestore.createDoc(this.person,this.persona , this.person.id).then((res)=>
  {console.log(res)});
}



  formValidation()
  {

    if(!this.person.name){
      this.showToast("Enter Name");
      return false;
    }

    if(!this.person.last_name){
      this.showToast("Enter Last Name");
      return false;
    }
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
