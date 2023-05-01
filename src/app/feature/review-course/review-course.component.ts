import { Component } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { Evaluation } from 'src/app/core/evaluation';

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
    const evaluation: Evaluation = {
      username: "user1",
      date: "2023-05-01",
      review: this.review,
      rating: this.currentRating,
      courseID: Number(this.courseID)
    }
    this.message = await this.backend.addReview(evaluation);
    this.courseID = "";
    this.courseName = "";
    this.review = "";
  }

}
