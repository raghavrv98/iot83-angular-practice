import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(private router: Router) { }

  empData: any = [];
  show = false;

  logoutHandler = () => {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  deleteHandler = (index: number) => {
    const isDeleted = window.confirm("Are you sure you want to delete?");
    this.empData.splice(index, 1)
    if (isDeleted) {
      localStorage.setItem('empData', JSON.stringify(this.empData));
    }
    this.show = this.empData.length > 0;
  }

  addOrEditHandlerHandler = (index: number) => {
    this.router.navigate([`addOrEditUser/${index}`])
  }

  ngOnInit(): void {
    const data = localStorage.getItem('empData');
    this.empData = data ? JSON.parse(data) : [];
    this.show = this.empData.length > 0;
  }

}
