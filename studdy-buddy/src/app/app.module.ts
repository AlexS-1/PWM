import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    MyAccountComponent,
    BrowseCoursesComponent,
    ListCoursesComponent,
    CreateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
