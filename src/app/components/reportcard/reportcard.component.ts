import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jspdf from'jspdf';


import { ExamService } from 'src/app/services/exam.service';
import { Updatereportcard } from 'src/app/dto/UpdateReportCard';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css']
})
export class ReportcardComponent implements OnInit {

  score: number;
  courseId: number;
  examLevel: number;
  reportCardId: number;
  level1Score: number;
  level2Score: number;
  status: number;
  userId: number;
  updateReport = new Updatereportcard();
  constructor(private router: Router, private examService: ExamService) {
    this.updateReport.level3Score = 0;
    this.updateReport.status = 0;
    this.courseId = Number(sessionStorage.getItem('userCourseId'));
    this.examLevel = Number(sessionStorage.getItem('examLevel'));
    this.score = Number(sessionStorage.getItem('score'));
    this.reportCardId = Number(sessionStorage.getItem('reportCardId'));
    this.level1Score = Number(sessionStorage.getItem('level1Score'));
    this.level2Score = Number(sessionStorage.getItem('level2Score'));
    this.userId = Number(sessionStorage.getItem('userUserId'));
    this.updateReport.reportId = this.reportCardId;
    this.updateReport.courseId = this.courseId;
    this.updateReport.userId = this.userId;
    if (this.score >= 60) {
      if (this.examLevel == 1) {
        this.updateReport.currentLevel = this.examLevel + 1;
        this.updateReport.level1Score = this.score;
      }
      else {
        this.updateReport.level1Score = this.level1Score;
        this.updateReport.level2Score = this.score;
        this.updateReport.currentLevel = this.examLevel;
        this.updateReport.status = 1;
      }
    }
    else {
      if (this.examLevel == 1) {
        if (this.level1Score >= this.score) {
          this.updateReport.level1Score = this.level1Score;
        } else {
          this.updateReport.level1Score = this.score
        }
        this.updateReport.currentLevel = this.examLevel;
        this.level2Score = 0;
      }
      else {
        this.updateReport.level1Score = this.level1Score;
        this.updateReport.currentLevel=this.examLevel;
        if (this.level2Score >= this.score) {
          this.updateReport.level2Score = this.level2Score;
        } else {
          this.updateReport.level2Score = this.score;
        }
      }
    }
    console.log(JSON.stringify(this.updateReport));
    this.updateReportCard();
  }

  ngOnInit() {
  }
  onExit() {
    this.router.navigate(['examhome']);
  }
  updateReportCard() {
    console.log(JSON.stringify(this.updateReport));
    this.examService.updateExistingReport(this.updateReport).subscribe(
      data => {
        if (data == null) {
          console.log("Exam Cannot be Conducted");
        } else {
          console.log("Data Updated");
        }
      }
    );
  }
  exportAsPDF()
  {    
      // let pdf = new jspdf('l', 'pt', 'a4');
      let pdf = new jspdf('l', 'pt', [window.innerWidth,window.innerHeight]);
        pdf.html(document.getElementById('pdf'), {
            callback: function () {
                pdf.save('web.pdf');
                //window.open(pdf.output('bloburl')); // use this to debug
            }
        });
  }
}
