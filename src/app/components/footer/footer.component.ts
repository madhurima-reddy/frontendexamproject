import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  getAdminLogin(){
    this.router.navigate(["adminlogin"])
  }
  getUserLogin(){
    this.router.navigate(["userlogin"])
  }
  getRegister(){
    this.router.navigate(["registeruser"])
  }

}
