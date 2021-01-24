import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ExampageComponent } from './components/exampage/exampage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RemovequestionComponent } from './components/removequestion/removequestion.component';
import { ReportComponent } from './components/report/report.component';
import { ReportcardComponent } from './components/reportcard/reportcard.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {ExamHomeComponent} from './components/exam-home/exam-home.component';
import { StartTestComponent} from './components/start-test/start-test.component';
import { CourseRegistrationComponent} from './components/course-registration/course-registration.component';
import { ResetpasswordComponent} from './components/resetpassword/resetpassword.component';
import {UserscorecardComponent} from './components/userscorecard/userscorecard.component';



const routes: Routes = [
  {path: "mainpage", component: MainpageComponent}, 
  {path: "exampage", component:ExampageComponent},
  {path: "userhome", component: UserhomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "report", component: ReportComponent},
  {path: "registeruser", component: RegisteruserComponent},
  {path: "adminlogin", component: AdminloginComponent},  
  {path: "adminprofile", component: AdminprofileComponent},  
  {path: "addquestion", component:AddquestionComponent},   
  {path: "removequestion", component:RemovequestionComponent},    
  {path: "reportcard", component:ReportcardComponent}, 
  {path: "userlogin", component:UserloginComponent},  
  {path: "examhome", component:ExamHomeComponent},  
  {path: "starttest", component:StartTestComponent},
  {path: "courseRegister", component: CourseRegistrationComponent},
  {​​​​​​​​ path:"forgotpassword", component:ForgotpasswordComponent }​​​​​​​​,
  {​​​​​​​​ path:"resetpassword/:code", component:ResetpasswordComponent }​​​​​​​​,  
  {​​​​​​​​ path:"userscorecard", component:UserscorecardComponent }​​​​​​​​,
  
  {path: "", component: MainpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
