import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'usermanagement';
  constructor(private router: Router) { }

  backToLoginHandler() {
    const data = localStorage.getItem('loginDetails');
    if (!data) {
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    this.backToLoginHandler();
  }
}

