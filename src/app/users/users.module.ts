import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './userslist/userslist.component';
import { LoginComponent } from './login/login.component';
import { AddoredituserComponent } from './addoredituser/addoredituser.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    UserslistComponent,
    LoginComponent,
    AddoredituserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    UserslistComponent,
    LoginComponent,
    AddoredituserComponent
  ]
})
export class UsersModule { }
