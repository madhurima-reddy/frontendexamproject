import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../dto/Question';
import { Reportcard } from '../dto/ReportCard';
import { Course } from '../dto/Course';
import { Newreport } from '../dto/NewReport';
import { Updatereportcard } from 'src/app/dto/UpdateReportCard';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  @Input()
  //userId: number = 1001;
  userId1: number;
  courseId: number;
  examLevel: number;
  obj = [];

  constructor(private http: HttpClient) { 
    console.log("mohan course:" + this.courseId);
  }

public fetchExamQuestion(): Observable<Question[]> {
  this.courseId = Number(sessionStorage.getItem('userCourseId'));
  this.examLevel = Number((sessionStorage.getItem('examLevel')));

  console.log("fatching level" + this.examLevel)
  console.log("course Question:" + this.courseId);

  return this.http.get<Question[]>('http://localhost:8080/fetchExamQuestions/' + this.examLevel + '/' + this.courseId);
}

public findingReportForExam(courseId1: number): Observable<Reportcard> {
  this.userId1 = Number(sessionStorage.getItem('userUserId'));

  console.log("report fetching" + courseId1);
  console.log("fetching with user:" + this.userId1);
  return this.http.get<Reportcard>('http://localhost:8080//findReport/' + this.userId1 + '/' + courseId1);
}

public viewAllCourses(): Observable<Course[]> {
  console.log("fetching courses")
  return this.http.get<Course[]>('http://localhost:8080//fetchAllCourses');
}

public generateNewCourseReport(newReport: Newreport): Observable<number> {
  console.log(JSON.stringify(newReport));
  return this.http.post<number>('http://localhost:8080/addNewReport/', newReport);
}

public updateExistingReport(updateReport: Updatereportcard): Observable<any> {
  return this.http.post<any>('http://localhost:8080/updateReport', updateReport);
}
public viewUserReports(): Observable<Updatereportcard> {
  this.userId1 = Number(sessionStorage.getItem('userUserId'));
  return this.http.get<Updatereportcard>('http://localhost:8080/reportByUserId/' + this.userId1);
}
}
