import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/dto/course';
import { Report } from 'src/app/dto/Report';
import { Searchstudent } from 'src/app/dto/SearchStudent';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  report: Report;
  courses: Course[] = [];
  searchStudents = new Searchstudent();
  searchstu: boolean = true;
  studentFound: boolean = false;
  @ViewChild("searchUserFrom", { static: false })
  form: NgForm;
  constructor(public router: Router, private userService: UserService) { }

  ngOnInit() {
    this.report = new Report({});
    this.courses.push(new Course({ courseId: 5001, courseName: "Java" }));
    this.courses.push(new Course({ courseId: 5002, courseName: "C++" }));
    this.courses.push(new Course({ courseId: 5003, courseName: "Python" }));
    this.courses.push(new Course({ courseId: 5004, courseName: "SQL" }));
    this.courses.push(new Course({ courseId: 5005, courseName: ".Net" }));
    this.courses.push(new Course({ courseId: 5006, courseName: "PHP" }));
  }
  searchUsers() {
    this.searchstu = false;
    if (this.form.valid) {
      this.userService.searchUserByDetails(this.report).subscribe((data) => {
        this.searchStudents = data;
        if (this.searchStudents) {
          this.studentFound = true;
        }
        console.log("result" + JSON.stringify(this.searchStudents));
      });
    }
  }
  //  this.router.navigate(["searchstudents"]);
  goBack1() {
    this.router.navigate(['adminprofile']);
  }
}
