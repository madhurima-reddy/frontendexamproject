import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Updatereportcard } from 'src/app/dto/UpdateReportCard';

@Component({
  selector: 'app-userscorecard',
  templateUrl: './userscorecard.component.html',
  styleUrls: ['./userscorecard.component.css']
})
export class UserscorecardComponent implements OnInit {

  showCourses: boolean = false;
  reports = new Updatereportcard();
  constructor(private examService: ExamService , private router: Router ) { }

  ngOnInit() {
    this.viewUserReports();
  }

  goBack(){
    this.router.navigate(['examhome'])
  }

  public viewUserReports() {
    this.examService.viewUserReports().subscribe(
      data => {
        if (data == null) {
          console.log("No Courses Found");
          this.showCourses = false;
        } else {
          this.showCourses = true;
          console.log(JSON.stringify(data));
          this.reports = data;
        }
      }
    );
  }

}
