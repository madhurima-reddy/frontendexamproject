import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Newreport } from 'src/app/dto/NewReport';
;

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {
  courses = [];
  userId: number = Number(sessionStorage.getItem("userUserId"));
  
  
  showCourses: boolean = false;
  courseId: number;
  reportId: number;
  newReport = new Newreport();
  constructor(private examService: ExamService, private router: Router) { }

  ngOnInit(): void {
    this.viewCourses();
  }
  public viewCourses() {
    this.examService.viewAllCourses().subscribe(
      data => {
        if (data == null) {
          console.log("No Courses Found");
          this.showCourses = false;
        } else {
          this.showCourses = true;
          console.log(JSON.stringify(data));
          this.courses = data;
        }
      }
    );
  }

  goToExamPage() {
    //sessionStorage.setItem("courseId",this.value);
    this.newReport.userId = this.userId;
    this.newReport.courseId = this.courseId;
    this.examService.generateNewCourseReport(this.newReport).subscribe(
      data => {
        if (data != null) {
          this.reportId = data;
          alert("Registered Successfully");
          this.router.navigate(['examhome']);
        }
      }
    );
  }

}
