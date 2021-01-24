import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { ExamService } from 'src/app/services/exam.service';
import { Question } from 'src/app/dto/Question';
import { Reportcard } from 'src/app/dto/ReportCard';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.css']
})
export class ExampageComponent implements OnInit {

  question: Question;
  @Input()
  optionOne: string = '';
  optionTwo: string = '';
  optionThree: string = '';
  optionFour: string = '';
  currentQuestion: number = 0;
  totalQuestions: number = 0;
  selectedOption: string = '';
  description: string = '';
  marks: number = 0;
  questions = [];
  userAnswers = [];
  evaluation = [];
  examLevel: number = 0;
  studentName: string;
  status: string;
  navigators: boolean = false;
  nextValue: boolean = false;
  finish: boolean = false;
  launch: boolean = true;
  showtable: boolean = false;
  toggle: boolean = false;
  toggle1: boolean = false;
  toggle2: boolean = false;
  toggle3: boolean = false;
  flag: boolean = false;
  timeLeftMin: number = 0;
  timeLeft: number = 59;
  interval;
  constructor(private _examService: ExamService, private router: Router) { }


  ngOnInit() {
    
  }

  fetchExamQuestion() {
    this.launch = false;
    this.nextValue = true;
    this.finish = true;
    this._examService.fetchExamQuestion().subscribe(
      data => {
        if (data == null) {
          console.log("Exam Cannot be Conducted");
        } else {
          console.log("fatched");
          console.log(JSON.stringify(data));
          this.questions = data;
          this.totalQuestions = Object.keys(this.questions).length;
          console.log(this.question);
          this.nextQuestion();
          this.showtable = true;
          this.flag = true;
          this.startTimer();
        }
      }
    );
  }
  nextQuestion() {
    this.question = this.questions[this.currentQuestion];
    this.description = this.question.description;
    this.optionOne = this.question.optionOne;
    this.optionTwo = this.question.optionTwo;
    this.optionThree = this.question.optionThree;
    this.optionFour = this.question.optionFour;
    this.evaluation[this.currentQuestion] = this.question.answer;
    console.log(this.selectedOption);
    this.userAnswers[this.currentQuestion - 1] = this.selectedOption;
    this.currentQuestion++;
    if (this.currentQuestion == this.totalQuestions) {
      this.nextValue = false;
    }

  } nextButton() {
    this.toggle = false;
    this.toggle1 = false;
    this.toggle2 = false;
    this.toggle3 = false;
    this.nextQuestion();
    // this,this.option=true;
    //this.selectedOption = null;
  }
  optionChange1(event: any) {
    this.toggle = !this.toggle;
    this.selectedOption = event.target.value;
    if (this.toggle1) {
      this.toggle1 = !this.toggle1;
    }
    if (this.toggle2) {
      this.toggle2 = !this.toggle2;
    }
    if (this.toggle3) {
      this.toggle3 = !this.toggle3;
    }
    // this.toggle1 = this.toggle1;
    // this.toggle2 = this.toggle2;
    // this.toggle3 = this.toggle3;
  }
  optionChange2(event: any) {
    this.toggle1 = !this.toggle1;
    this.selectedOption = event.target.value;
    if (this.toggle) {
      this.toggle = !this.toggle;
    }
    if (this.toggle2) {
      this.toggle2 = !this.toggle2;
    }
    if (this.toggle3) {
      this.toggle3 = !this.toggle3;
    }
    // this.toggle = this.toggle;
    // this.toggle2 = this.toggle2;
    // this.toggle3 = this.toggle3;
  }
  optionChange3(event: any) {
    this.toggle2 = !this.toggle2;
    this.selectedOption = event.target.value;
    if (this.toggle) {
      this.toggle = !this.toggle;
    }
    if (this.toggle3) {
      this.toggle3 = !this.toggle3;
    }
    if (this.toggle1) {
      this.toggle1 = !this.toggle1;
    }
    // this.toggle1 = this.toggle1;
    // this.toggle = this.toggle;
    // this.toggle3 = this.toggle3;

  }
  optionChange4(event: any) {
    this.toggle3 = !this.toggle3;
    this.selectedOption = event.target.value;
    if (this.toggle) {
      this.toggle = !this.toggle;
    }
    if (this.toggle2) {
      this.toggle2 = !this.toggle2;
    }
    if (this.toggle1) {
      this.toggle1 = !this.toggle1;
    }


  }

  finishTest() {
    this.userAnswers[this.currentQuestion - 1] = this.selectedOption;
    console.log(JSON.stringify(this.userAnswers));

    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] == this.evaluation[i]) {
        this.marks++;
      }
    }
    console.log(this.marks);
    this.marks = (this.marks / this.totalQuestions) * 100;
    sessionStorage.setItem('score', this.marks + '');
    console.log(this.marks);
    this.router.navigate(['/reportcard']);
  }
  launchMethod() {
    this.launch = false;
    this.fetchExamQuestion();
  }
  startTimer() {
    this.timeLeftMin = this.totalQuestions;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeftMin--;
        this.timeLeft = 59;
      }
      if(this.timeLeftMin ==0 && this.timeLeft==0){
        clearInterval(this.interval);
        this.finishTest();
      }
    }, 1000);
  }

}
