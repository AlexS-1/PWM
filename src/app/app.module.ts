import { AppFetchDataTsService } from './app.fetch-data.ts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReviewCourseComponent } from './review-course/review-course.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    AboutUsComponent,
    HomeComponent,
    MyAccountComponent,
    BrowseCoursesComponent,
    MyCoursesComponent,
    CreateCourseComponent,
    LogInComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    TermsOfUseComponent,
    CourseDetailsComponent,
    ReviewCourseComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppFetchDataTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
