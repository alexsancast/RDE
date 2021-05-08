import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FirestorageService} from 'src/app/services/firestorage.service';
import {Productos} from '//home/acastillo/Documents/firebase_login/src/app/module/prodcutos.interface'




@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

   
 productos:Productos={
   nombre : '',
   precio:null,
   id_person : this.firestorageService.getId()

 }

  path = "/productos";
 
   


  constructor( public firestorageService:FirestorageService ) { }

  ngOnInit() {
  }

  uploadP(){
  
    
    this.firestorageService.createDoc(this.productos,this.path,this.productos.id_person)

  }

}
