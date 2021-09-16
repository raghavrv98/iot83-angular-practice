import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { AddoredituserComponent } from './users/addoredituser/addoredituser.component';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "userlist",
    component: UserslistComponent
  },
  {
    path: "addOrEditUser",
    component: AddoredituserComponent
  },
  {
    path: "addOrEditUser/:id",
    component: AddoredituserComponent
  },
  {
    path: "**",
    component: NoDataFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

