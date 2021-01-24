import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ExampageComponent } from './components/exampage/exampage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RemovequestionComponent } from './components/removequestion/removequestion.component';
import { ReportComponent } from './components/report/report.component';
import { ReportcardComponent } from './components/reportcard/reportcard.component';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';

import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { StartTestComponent } from './components/start-test/start-test.component';
import { UserscorecardComponent } from './components/userscorecard/userscorecard.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AddquestionComponent,
    AdminloginComponent,
    AdminprofileComponent,
    ExampageComponent,
    FooterComponent,
    HeaderComponent,
    
    MainpageComponent,
    RegisteruserComponent,
    RemovequestionComponent,
    ReportComponent,
    ReportcardComponent,
    
    UserhomeComponent,
    UserloginComponent,
    ForgotpasswordComponent,
    ExamHomeComponent,
   
    ResetpasswordComponent,
    StartTestComponent,
    UserscorecardComponent,
    CourseRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
