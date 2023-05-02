import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth-service.service';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { Course } from 'src/app/models/course';

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

  messenger() {
    if (this.courseID != null && this.courseID !== '' && !isNaN(Number(this.courseID.toString()))) {
      this.message = "Plase enter a number";
    } else {
      this.message = "";
    }
  }

  async addCourse() {
    const course: Course = {
      id: Number(this.courseID),
      title: this.courseName,
      description: this.courseDescription,
      createdByUserID: await this.auth.getCurrentUserName()
    }
    this.message = await this.backend.addCourse(course)
    this.courseID = "";
    this.courseName = "";
    this.courseDescription = "";
  }
}
