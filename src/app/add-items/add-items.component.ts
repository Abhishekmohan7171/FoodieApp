import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FirebaseStorageService } from '../firebase-storage.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  constructor(private adb:AngularFireDatabase,private fs:FirebaseStorageService){}
  data:any
  status = false;
  statusTwo = false;
  addItems = new FormGroup({
    food: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required)
  })


  addToDb(){
    //console.log(this.addItems.value);
    //this.adb.database.ref('menu').push(this.addItems.value);
    //const id = 'id'+ Math.random().toString(16).slice(8);
    this.status = true;
    setTimeout(()=>{
      this.fs.addToDatabase(this.addItems.value);
      this.status = false;
      this.addItems.reset()
    },1500);
  }

  removeDb(){
    this.statusTwo = true;
    setTimeout(()=>{
      this.fs.clearDatabase();
      this.statusTwo = false;
    },1500)
  }
}
