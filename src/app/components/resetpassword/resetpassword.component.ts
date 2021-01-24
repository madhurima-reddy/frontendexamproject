import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Resetpassword } from "src/app/dto/resetPassword";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  reset: Resetpassword;
  value: boolean;
  isFormSubmitted = false;
  code: string;
  match: string;
  @ViewChild("resetPasswordForm", { static: false })
  form: NgForm;

  constructor(
    public router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reset = new Resetpassword({});
    this.code = this.activatedRoute.snapshot.params["code"];
    this.reset.code = this.code;
  }

  resetPassword() {
    this.isFormSubmitted = true;
    if (!(this.reset.newPassword == this.reset.confirmPassword)) {
      this.match = "Password not matching";
      //window.location.reload();
    }
    else {
      this.userService.resetPassword(this.reset).subscribe((data) => {
        this.value = data;
      });
      this.router.navigate(["userlogin"]);

    }

  }
}
