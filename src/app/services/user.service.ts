import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dto/user';
import { ForgotPassword } from '../dto/forgot-Password';
import { Report } from '../dto/Report';
import { Resetpassword } from '../dto/resetPassword';
import { Searchstudent } from '../dto/SearchStudent';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  flag: Observable<boolean>
  logflag: boolean = false;
  adminlogflag: boolean = false;

  constructor(private http: HttpClient) { }
  public registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/register', user)
  }
  public deleteQuestion(questionId: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/removeQuestion?questionId=' + questionId);
  }
  public resetPassword(resetPassword: Resetpassword): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:8080/resetPassword", resetPassword);
  }

  public forgotPassword(forgotPassword: ForgotPassword): Observable<ForgotPassword> {
    return this.http.post<Resetpassword>("http://localhost:8080/forgotPassword", forgotPassword);
  }
  public validateUser(userEmail: string, userPassword: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/isValidUser/' + userEmail + '/' + userPassword)
  }
  public validateAdmin(adminEmail: string, adminPassword: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/isValidAdmin/' + adminEmail + '/' + adminPassword)
  }

  public searchUserByDetails(report: Report): Observable<Searchstudent> {
    return this.http.get<Searchstudent>('http://localhost:8080/findUsersByDetails?courseId=' + report.courseId + '&userState=' + report.userState + '&userCity=' + report.userCity + '&level=' + report.examLevel + '&fromRange=' + report.fromRange + '&toRange=' + report.toRange);
  }

}
