import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import pages
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ReviewCourseComponent } from './review-course/review-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  /* Add route info to route array*/
  { path: '', component:HomeComponent},
  { path: 'terms-of-use', component:TermsOfUseComponent},
  { path: 'about-us', component:AboutUsComponent },
  { path: 'home', component:HomeComponent},
  { path: 'my-account', component:MyAccountComponent},
  { path: 'my-courses', component:MyCoursesComponent},
  { path: 'log-in', component:LogInComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'create-course', component:CreateCourseComponent},
  { path: 'create-account', component:CreateAccountComponent},
  { path: 'browse-courses', component:BrowseCoursesComponent},
  { path: 'course-details', component:CourseDetailsComponent},
  { path: 'review-course', component:ReviewCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
