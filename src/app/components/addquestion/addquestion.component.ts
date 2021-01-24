import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Course } from "src/app/dto/course";
import { Question } from "src/app/dto/question";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  question: Question;
  isFormSubmitted = false;
  courses: Course[] = [];

  @ViewChild("addQuestionForm", { static: false })
  form: NgForm;

  constructor(private addquestionService: QuestionService) { }

  ngOnInit(): void {
    this.question = new Question({});
    this.courses.push(new Course({ courseId: 5001, courseName: "Java" }));
    this.courses.push(new Course({ courseId: 5002, courseName: "C++" }));
    this.courses.push(new Course({ courseId: 5003, courseName: "Python" }));
    this.courses.push(new Course({ courseId: 5004, courseName: "SQL" }));
    this.courses.push(new Course({ courseId: 5005, courseName: ".Net" }));
    this.courses.push(new Course({ courseId: 5006, courseName: "PHP" }));
  }

  public addQuestion() {
    this.isFormSubmitted = true;
    //var a = this.question;
    if (this.form.valid) {
      this.addquestionService.addQuestion(this.question).subscribe((data) => {
        this.question.courseId = data;
        alert("Question Added Successfully!!");
      });
    }
  }

}
