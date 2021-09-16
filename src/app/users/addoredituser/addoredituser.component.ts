import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addoredituser',
  templateUrl: './addoredituser.component.html',
  styleUrls: ['./addoredituser.component.css']
})
export class AddoredituserComponent implements OnInit {

  empData: any = [];
  editData: any = {
    empId: "",
    empName: "",
    emailId: ""
  };
  id: any = "";
  constructor(private router: Router, private route: ActivatedRoute) { }
  onSubmitHandler = (values: object) => {
    if (this.id) {
      this.empData[this.id] = values;
    }
    else {
      this.empData.push(values);
    }
    localStorage.setItem('empData', JSON.stringify(this.empData))
    this.router.navigate(['/userlist'])
  }

  ngOnInit(): void {
    const data = localStorage.getItem('empData');
    this.empData = data ? JSON.parse(data) : [];
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.editData = this.empData.find((value: {}, index: any) => index == this.id)
    }
  }
}
