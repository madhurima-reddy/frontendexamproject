import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-removequestion',
  templateUrl: './removequestion.component.html',
  styleUrls: ['./removequestion.component.css']
})
export class RemovequestionComponent implements OnInit {
  user=new User();
  // fetchedUser=new User();
  value:boolean;
  questionId:number;

  constructor(private userService:UserService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deleteQuestion(){
    console.log(this.questionId);
    this.userService.deleteQuestion(this.questionId).subscribe(data=>{
      console.log(JSON.stringify(data));
       this.value=true;
      alert(" Question Deleted");
      this.questionId=data;
     }
     );
  }

}
