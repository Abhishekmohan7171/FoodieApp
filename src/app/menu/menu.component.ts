import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {getDatabase} from 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  data!: Observable<any>;
  db = getDatabase();
  constructor(private http: HttpClient, private adb: AngularFireDatabase) {}

  ngOnInit(): void {
    this.data = this.http.get(`assets/menu.json`);
  }
}
