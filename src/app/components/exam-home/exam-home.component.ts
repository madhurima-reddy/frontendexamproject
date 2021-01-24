import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Reportcard } from 'src/app/dto/ReportCard';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.css']
})
export class ExamHomeComponent implements OnInit {
  currentlevel: number;
  reportCard: Reportcard;
  courseId: number;
  courseId1: number;

  constructor(private router: Router, private examService: ExamService) { }

  ngOnInit(): void {
  }
  registerCourse() {
    this.router.navigate(['/courseRegister'])
  }
  javaExamPage() {
    this.courseId = 5001;
    this.JavaReportFetch(this.courseId);
  }
  CPlusExamPage() {
    this.courseId = 5002;
    this.JavaReportFetch(this.courseId);
  }
  sqlExamPage() {
    this.courseId = 5004;
    this.JavaReportFetch(this.courseId);
  }
  phpExamPage() {
    this.courseId = 5006;
    this.JavaReportFetch(this.courseId);
  }
  dotNetExamPage() {

    this.courseId = 5005;
    this.JavaReportFetch(this.courseId);
  }
  pythonExamPage() {

    this.courseId = 5003;
    this.JavaReportFetch(this.courseId);
  }
  JavaReportFetch(courseId: number) {
    this.courseId1 = courseId;
    console.log("mohan" + this.courseId1)
    console.log("clicked");
    this.examService.findingReportForExam(this.courseId1).subscribe(
      data => {
        if (data == null) {
          alert("You are not registered to this course.So,Please register first.!!")
          this.router.navigate(['/courseRegister'])
          console.log("Exam Cannot be Conducted");
        } else {
          console.log(JSON.stringify(data))
          this.reportCard = data;
          this.currentlevel = this.reportCard.currentLevel;
          console.log("In exam-home currentLevel:" + this.currentlevel);
          if (this.reportCard.status == 1) {
            alert("You have completed this Course..Check the Report..!!")
            this.router.navigate(['/examhome']);
          } else {
            console.log("User current level:" + this.currentlevel);
            sessionStorage.setItem('examLevel', this.currentlevel + '');
            sessionStorage.setItem('userCourseId', this.courseId1 + '');
            sessionStorage.setItem('level1Score', this.reportCard.level1Score + '');
            sessionStorage.setItem('level2Score', this.reportCard.level2Score + '');
            sessionStorage.setItem('reportCardId', this.reportCard.reportId + '');
            //sessionStorage.setItem('leve', this.reportCard.reportId + '');

            console.log("Report Id set: Mohan" + sessionStorage.getItem('reportCardId'));
            console.log(JSON.stringify(this.reportCard));
            this.router.navigate(['/starttest'])
          }

        }
      }
    );

  }
  clickHere() {
    this.router.navigate(["userscorecard"]);
  }

}
