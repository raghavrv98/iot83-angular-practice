import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmitHandler(values: object) {
    localStorage.setItem('loginDetails', JSON.stringify(values));
    this.router.navigate(['/userlist'])
  }

  ngOnInit(): void {
  }

}
