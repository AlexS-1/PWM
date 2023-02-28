import { CreateCourseComponent } from './create-course/create-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import pages
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  /* Add route info to route array*/
  { path: '', component:HomeComponent},
  { path: 'contact-component', component:ContactComponent},
  { path: 'app-component', component:AppComponent }, /* Not sure if this one is needed since it is the basic component*/
  { path: 'about-us-component', component:AboutUsComponent },
  { path: 'home-component', component:HomeComponent},
  { path: 'my-account-component', component:MyAccountComponent},
  { path: 'browse-courses-component', component:BrowseCoursesComponent},
  { path: 'list-courses-component', component:ListCoursesComponent},
  { path: 'create-course-component', component:CreateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
