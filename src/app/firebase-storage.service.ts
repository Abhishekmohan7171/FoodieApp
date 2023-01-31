import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, onValue, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  db=getDatabase()

  constructor(private adb:AngularFireDatabase) { }

  addToDatabase(formInput:any){
    //console.log(this.addItems.value);
    //this.adb.database.ref('menu').push(this.addItems.value);
    //const id = 'id'+ Math.random().toString(16).slice(8);
    this.adb.database.ref("/menu").push(formInput)
  }
  
  //done in component
  // callFromDatabase(){
  //   const getFood = ref(this.db,"/menu");
  //   onValue(getFood, (val)=>{
  //     let data = val.val();
  //     console.log(data)
  //   })
  // }

  clearDatabase(){
    this.adb.database.ref("/menu").remove();
  }
}
