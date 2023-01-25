import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  {
    path:'',
    component: AppShellComponent
  },
  {
    path:'add',
    component: AddItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
