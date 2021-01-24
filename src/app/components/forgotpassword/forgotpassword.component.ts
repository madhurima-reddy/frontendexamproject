import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { ForgotPassword } from "src/app/dto/forgot-Password";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: ForgotPassword;
  flag: boolean = false;
  flag1: boolean = false;
  @ViewChild("forgotPasswordForm", { static: false })
  form: NgForm;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.forgotPassword = new ForgotPassword({});
  }
  public sendLinkToEmail() {
    console.log(this.forgotPassword);
    if (!this.forgotPassword.userEmail) {
      this.flag1 = true;
    } else {
      this.userService.forgotPassword(this.forgotPassword).subscribe((data) => {
        // this.forgotPassword = data;
        this.flag = true;
        console.log(data);
      });
    }

  }

}
