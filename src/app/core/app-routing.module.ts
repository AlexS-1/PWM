import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarService } from './nav-bar.service';

// Import pages
import { AppComponent } from './app.component';
import { AboutUsComponent } from '../feature/about-us/about-us.component';
import { HomeComponent } from '../feature/home/home.component';
import { LoginComponent } from '../feature/log-in/log-in.component';
import { CreateAccountComponent } from '../feature/create-account/create-account.component';
import { CreateCourseComponent } from '../feature/create-course/create-course.component';
import { MyCoursesComponent } from '../feature/my-courses/my-courses.component';
import { BrowseCoursesComponent } from '../feature/browse-courses/browse-courses.component';
import { MyAccountComponent } from '../feature/my-account/my-account.component';
import { TermsOfUseComponent } from '../feature/terms-of-use/terms-of-use.component';
import { ReviewCourseComponent } from '../feature/review-course/review-course.component';
import { CourseDetailsComponent } from '../feature/course-details/course-details.component';
import { ForgotPasswordComponent } from '../feature/forgot-password/forgot-password.component';
import { TestComponent } from '../test/test.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  /* Add route info to route array*/
  { path: '', component: HomeComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuardService], data: { roles: ['user', 'admin'] }},
  { path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuardService], data: { roles: ['user', 'admin'] }},
  { path: 'log-in', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'browse-courses', component: BrowseCoursesComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent }, // Änderung hier
  { path: 'review-course', component: ReviewCourseComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private navBarService: NavBarService){}

}
