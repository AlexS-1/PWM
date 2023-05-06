import { FormsModule } from '@angular/forms';
import { AppFetchDataTsService } from './app.fetch-data.ts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppStarRatingHoverComponent } from '../feature/app-star-rating-hover/app-star-rating-hover.component';

/// Firebase ///
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';
////////////////

import { AppComponent } from './app.component';
import { NavBarComponent } from './../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SideBarComponent } from './../shared/side-bar/side-bar.component';
import { AboutUsComponent } from '../feature/about-us/about-us.component';
import { HomeComponent } from '../feature/home/home.component';
import { MyAccountComponent } from '../feature/my-account/my-account.component';
import { BrowseCoursesComponent } from '../feature/browse-courses/browse-courses.component';
import { MyCoursesComponent } from '../feature/my-courses/my-courses.component';
import { CreateCourseComponent } from '../feature/create-course/create-course.component';
import { LoginComponent } from '../feature/log-in/log-in.component';
import { CreateAccountComponent } from '../feature/create-account/create-account.component';
import { ForgotPasswordComponent } from '../feature/forgot-password/forgot-password.component';
import { TermsOfUseComponent } from '../feature/terms-of-use/terms-of-use.component';
import { CourseDetailsComponent } from '../feature/course-details/course-details.component';
import { ReviewCourseComponent } from '../feature/review-course/review-course.component';
import { TestComponent } from '../test/test.component';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';

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
    LoginComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    TermsOfUseComponent,
    CourseDetailsComponent,
    ReviewCourseComponent,
    TestComponent,
    StarRatingComponent,
    AppStarRatingHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    AngularFirestoreModule,
    //AngularFireStorageModule
  ],
  providers: [AppFetchDataTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
