import { Component, OnInit } from '@angular/core';
import { FirestorageService} from 'src/app/services/firestorage.service';
import { Productos } from '//home/acastillo/Documents/firebase_login/src/app/module/prodcutos.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  path = '/productos';
  productos : Productos[];

  constructor(public firestorageService: FirestorageService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    return this.firestorageService.getColletion<Productos>(this.path).subscribe(res =>{this.productos =res;} );
  
  }

  delete(producto:Productos){

    return this.firestorageService.deleteCollection(this.path,producto.id_person)

  }

  edit(){

  }

}
