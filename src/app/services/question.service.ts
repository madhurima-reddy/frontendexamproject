import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Question } from "../dto/question";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  public addQuestion(question: Question): Observable<number>{
    return this.http.post<number>(
      "http://localhost:8080/addQuestion",
      question
    );
  }
}
