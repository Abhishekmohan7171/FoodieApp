import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import {getDatabase,onValue, ref} from 'firebase/database';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/compat/database';
import { FirebaseStorageService } from '../firebase-storage.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  data!: Observable<any>;
  foodData:any;
  db = getDatabase();
  count = 0;
  less = false;
  over = false;
  btn = true;
  isDisabled = false;
  constructor(private http: HttpClient, private adb: AngularFireDatabase, private fbs:FirebaseStorageService) {}

  ngOnInit(): void {
    this.callFromDatabase()
  }

  callFromDatabase(){
    const newItem:Observable<any> = this.adb.list("menu").valueChanges()
    this.data = newItem.pipe(map((v:any)=>{
      return v.map((a:any)=>{
        a['qty']=0
        return a
      })
    }))

    // const getFood = ref(this.db,"/menu");
    // onValue(getFood, (v)=>{
    //   let data = v.val();
    //   console.log(v)
    //   let food = Object.values(data);
    // this.foodData = food.map((v:any)=>{
      //   v['qty'] = 0;
      //   return v
      // })
    // })
  }

  increment(i:any,food:any){
    food.qty += 1;
  }

  decrement(i:any,food:any){
    if(food.qty == 0){
      this.isDisabled = true;
    }else{
      food.qty -= 1;
    }
  }
}
