import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userid: number;
  validAdmin: number;

  constructor(public router: Router, public userService: UserService) {
    console.log("header constructor");
    this.userid = Number(sessionStorage.getItem('userUserId'));
    this.validAdmin = Number(sessionStorage.getItem('validAdmin'));
    if (this.userid) {
      this.userService.logflag = true;
      this.router.navigate(['examhome']);
    }
    if (this.validAdmin) {
      this.userService.adminlogflag = true;
      this.router.navigate(['adminprofile']);
    }
   }
   aboutUs() {
    console.log("in aboutus");
    if (this.userid) {
      this.userService.logflag = true;
    }
    if (this.validAdmin) {
      this.userService.adminlogflag = true;
    }
   }

  ngOnInit() {
    console.log("header init");
  }
  logout() {
    sessionStorage.clear();
    if (this.userService.logflag) {
      this.userService.logflag = false;
      this.router.navigate(['userlogin']);
    }
    if (this.userService.adminlogflag) {
      this.userService.adminlogflag = false;
      this.router.navigate(['adminlogin']);
    }
  }

}
