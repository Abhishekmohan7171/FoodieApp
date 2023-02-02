import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemsComponent } from './add-items/add-items.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';


const firebaseConfig = {
  apiKey: "AIzaSyBxfqGzlOvg87h9-FQas8Qa3rd2VuvbRKY",
  authDomain: "hotelapp-1bf00.firebaseapp.com",
  projectId: "hotelapp-1bf00",
  storageBucket: "hotelapp-1bf00.appspot.com",
  messagingSenderId: "1029966844336",
  appId: "1:1029966844336:web:c16c64df09fb7403fd4675"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    AppShellComponent,
    AddItemsComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
