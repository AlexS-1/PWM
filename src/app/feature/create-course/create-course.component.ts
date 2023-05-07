import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth-service.service';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  //Constructor for used services
  constructor(private backend: BackendDataService, private auth: AuthService) {
  }

  //Input of form
  courseID = "";
  courseName = "";
  courseDescription = "";

  //Output to form
  message = "";

  //Help variables
  debugging = true;

  async messenger() {
    if (this.courseID != null && this.courseID !== '' && !isNaN(Number(this.courseID.toString()))) {
      this.message = "Plase enter a number";
    } else {
      this.message = "";
    }
  }

  async addCourse() {
    const isLoggedIn = await this.auth.isLoggedIn()
    if (!isLoggedIn) {
      this.message = "Please log-in to add courses!"
    } else {
      const username: string = await this.auth.getCurrentUserName()
      const userData = await this.backend.getUserData(username)
      let currUserID = 9;
      if (userData.exists()) {
        currUserID = userData.data()['id']
        if (this.debugging) {
          console.log(currUserID);
        }
      }
      const course: Course = {
        id: Number(this.courseID),
        title: this.courseName,
        description: this.courseDescription,
        createdByUserID: currUserID
      }
      this.message = await this.backend.addCourse(course)
      this.courseID = "";
      this.courseName = "";
      this.courseDescription = "";
    }
  }
}
