import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import pages
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  /* Add route info to route array*/
  { path: '', component:HomeComponent},
  { path: 'terms-of-use', component:TermsOfUseComponent},
  { path: 'app', component:AppComponent }, /* Not sure if this one is needed since it is the basic component*/
  { path: 'about-us', component:AboutUsComponent },
  { path: 'home', component:HomeComponent},
  { path: 'my-account', component:MyAccountComponent},
  { path: 'browse-courses', component:BrowseCoursesComponent},
  { path: 'list-courses', component:ListCoursesComponent},
  { path: 'log-in', component:LogInComponent},
  { path: 'log-in/forgot-password', component:ForgotPasswordComponent},
  { path: 'log-in/create-account', component:CreateAccountComponent},
  { path: 'create-course', component:CreateCourseComponent},
  { path: 'create-account', component:CreateAccountComponent},
  { path: 'home/create-account', component:CreateAccountComponent},
  { path: 'home/browse-courses', component:BrowseCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
