import { Component } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';

@Component({
  selector: 'app-review-course',
  templateUrl: './review-course.component.html',
  styleUrls: ['./review-course.component.css']
})
export class ReviewCourseComponent {
  constructor(private backend: BackendDataService) {

  }

  //Input from form
  courseID = "";
  courseName = "";
  currentRating = 0;
  review = "";

  //Output to form
  message = "";
  ratingVailidity = false;

  setRating(rating: number) {
    this.currentRating = rating;
    this.ratingVailidity = true;
  }
  
  async reviewCourse() {
    this.message = await this.backend.addReview(Number(this.courseID), this.courseName, Number(this.currentRating), this.review);
    this.courseID = "";
    this.courseName = "";
    this.review = "";
  }

}
