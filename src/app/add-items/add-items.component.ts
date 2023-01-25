import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  constructor(private adb:AngularFireDatabase){}

  addItems = new FormGroup({
    food: new FormControl(''),
    price: new FormControl(''),
    quantity:new FormControl('')
  })


  addToDb(){
    //console.log(this.addItems.value);
    //this.adb.database.ref('menu').push(this.addItems.value);
    const id = 'id'+ Math.random().toString(16).slice(8);
    this.adb.list("/menu").set(id, this.addItems.value)
  }
}
