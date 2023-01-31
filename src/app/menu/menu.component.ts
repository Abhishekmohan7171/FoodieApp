import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient, private adb: AngularFireDatabase, private fbs:FirebaseStorageService) {}

  food:any;



  ngOnInit(): void {
    this.callFromDatabase()
  }

  callFromDatabase(){
    const getFood = ref(this.db,"/menu");
    onValue(getFood, (v)=>{
      let data = v.val();
      this.foodData = Object.values(data);
      console.log(this.foodData)
    })
  }
}
