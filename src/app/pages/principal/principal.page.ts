import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FirestorageService} from 'src/app/services/firestorage.service';
import {Productos} from 'src/app/module/productos.interface'
import { LoadingController } from '@ionic/angular';
import { FireauthService } from 'src/app/services/fireauth.service';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

   
 productos:Productos={
   id:this.firestorageService.getId(),
   nombre : '',
   precio:null,
   foto:'',
   id_person :''

 }

  path = "/productos";
 
   


  constructor( public firestorageService:FirestorageService,
               public loader:LoadingController,
               public fauth : FireauthService ) { }

  ngOnInit() {
   
    

  }

  async uploadP(){
  
    this.loadingUp()
    
      this.firestorageService.createDoc(this.productos,this.path,this.productos.id).then(res =>{
    
        const uid =  this.fauth.getCurrentAth();
        this.productos.id_person=uid;

           
    });
    
     
  
    
  

}

 async  loadingUp(){
     const loder =this.loader.create({
       message:'Subiendo Productos',
       duration:7888
     });

     (await loder).present()
   }
     
   
}