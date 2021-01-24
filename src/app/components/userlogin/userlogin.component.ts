import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  @Input()
  userId: number;

  constructor(public router: Router, private userService: UserService) { 
    this.userId = Number(sessionStorage.getItem('userUserId'));
    if (this.userId) {
      this.userService.logflag = true;
  }
}
 
  ngOnInit(): void {
  }
  userEmail: string;
  userPassword: string;
  value: boolean;
  isValidUser: boolean = false;
  examHome() {
    this.userService.validateUser(this.userEmail, this.userPassword).subscribe(data => {
      console.log(data);
      if (data) {
        this.userId = data;
        console.log(this.userId);
        this.userService.logflag = true;
        sessionStorage.setItem("userUserId", this.userId + '');
        this.router.navigate(["examhome"]);
      }
      else {
        this.isValidUser = true;
      }
    }
    );
  }

}
