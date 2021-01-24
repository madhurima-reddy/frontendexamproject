import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/dto/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  @ViewChild("registerUserForm", { static: false })
  form: NgForm;
  isFormSubmitted = false;
  user = new User();
  fetchedUser = new User();
  value: boolean;
  flag1: boolean = true;
  flag: boolean = false;
  status: string;
  private _userService: UserService;
  constructor(private userService: UserService, private router: Router) {
    this._userService = userService;
  }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['userlogin'])
  }
  public registerUser() {
    this.flag1 = false;
    this.isFormSubmitted = true;
    this.userService.registerUser(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      if (data) {
        this.value = true;
        this.flag = true;
        this.status = "Registered Successfully..!!";
        this.fetchedUser = data;
      }
      else {
        this.flag = true;
        this.status = "Registration Failed, Please check the details..!!";
      }

    }
    );
  }

}
