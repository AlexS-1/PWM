import { Component } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  //Constructor for used services
  constructor(private backend: BackendDataService) {
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
    this.message = await this.backend.addCourse(Number(this.courseID), this.courseName, this.courseDescription)
    this.courseID = "";
    this.courseName = "";
    this.courseDescription = "";
  }
}
