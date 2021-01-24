import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  removeQuestion(){
    this.router.navigate(["removequestion"])
  }
  addQuestion(){
    this.router.navigate(["addquestion"])
  }
  reportCard(){
    this.router.navigate(["report"])
  }

}
