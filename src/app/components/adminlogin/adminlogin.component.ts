import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public router:Router,private userService: UserService) { }

  ngOnInit() {
  }
  adminEmail: string;
  adminPassword: string;
  isValidAdmin: boolean = false;
  onLogin() {
    this.userService.validateAdmin(this.adminEmail, this.adminPassword).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(" Login Succesful");
        this.userService.adminlogflag = true;
        sessionStorage.setItem('validAdmin', "1");
        this.router.navigate(['adminprofile'])
      }
      else {
        this.isValidAdmin = true;
        //console.log(" Wrong credentials");
      }
    }
    );
  }

}
