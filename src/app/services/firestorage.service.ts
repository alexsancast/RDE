import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore'
import {Productos} from 'src/app/module/productos.interface'

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(

    public db : AngularFirestore

  ) { }

 createDoc(data:any , path:string , id:string){
   const collection =this.db.collection(path);
   return collection.doc(id).set(data);
 } 

 getId(){
   return this.db.createId()
 }


getColletion<tipo>(path:string){
  const collection = this.db.collection<tipo>(path);
  return collection.valueChanges();

}

deleteCollection(path:string ,id:string){
  const collection = this.db.collection(path);
  return collection.doc(id).delete();
}

}
