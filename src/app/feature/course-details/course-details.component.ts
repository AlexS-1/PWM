import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Evaluation } from 'src/app/models/evaluation';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { AuthService } from 'src/app/core/auth-service.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private backend: BackendDataService, 
    private authService: AuthService,
    private router: Router) {

  }

  dataEntry: Course = {
    id: 0,
    title: '',
    description: '',
    createdByUserID: 0
  };

  //Reviews for testing
  review1: Evaluation = {
    username: 'testuser',
    date: '2000-10-10',
    review: 'bala',
    rating: 1,
    courseID: 1
  }

  review2: Evaluation = {
    username: 'testuser',
    date: '2000-10-10',
    review: 'bala',
    rating: 5,
    courseID: 1
  }

  reviews: Evaluation[] = [];
  

  averageRating: number = 0;
  toggleMyCourses: string = "Operation my Courses"

  debugging = true;

  ngOnInit() {
    // Get information on loaded course
    this.route.params.subscribe(async (params) => {
      const id = Number(params['id']);
      this.getCourseForID(id);
      this.getEvaluationsByCourseID(id);
      this.checkLogIn(id)
      /*DEPRICATED: Loading from JSON
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
      this.reviews = commentData.filter((entry) => entry.courseID === parseInt(id, 10));*/
    });
  }

  ngAfterViewInit() {
    this.calculateAverageRating();
  }

  async getCourseForID(id: number) {
      // Loading courses for current user from firebase backend
      const doccoumentData = await this.backend.getCourseData(id);
      if(doccoumentData.exists()) {
        this.dataEntry.id = doccoumentData.data()['id'];
        this.dataEntry.title = doccoumentData.data()['title'];
        this.dataEntry.description = doccoumentData.data()['description'];
        this.dataEntry.createdByUserID = doccoumentData.data()['createdByUserID'];
      }
  }

  async getEvaluationsByCourseID(id: number) {
    // Loading data from firebase backend
    const evaluations = await this.backend.getEvaluationsForCourse(id);
    evaluations.forEach((doc) => {
      const evaluation: Evaluation = {
        username: doc.data()['username'],
        date: doc.data()['date'],
        review: doc.data()['review'],
        rating: doc.data()['rating'],
        courseID: doc.data()['courseID']
      }
      this.reviews.push(evaluation);
    });
  }

  async checkLogIn(currentCourseID: number) {
    let loggedIn:boolean  = await this.authService.isLoggedIn();
    if (loggedIn) {
      const getCurrentUserName = await this.authService.getCurrentUserName()
      const currentUserData = await this.backend.getUserData(getCurrentUserName);
      if (currentUserData.exists()) {
        const loggedInUserCourses: number[] = currentUserData.data()['courses']
        if (loggedInUserCourses.includes(currentCourseID)) {
          this.toggleMyCourses = "- Remove from my Courses"
        } else {
          this.toggleMyCourses = "+ Add to my Courses"
        }
      }
    } else {
      this.toggleMyCourses = "Log in to add to my Courses"
    }
  }

  async toggleUserCourses() {
    let loggedIn: boolean = await this.authService.isLoggedIn();
    if (loggedIn && this.toggleMyCourses == "+ Add to my Courses") {
      this.addToUsersCourses()
      this.toggleMyCourses = "- Remove from my Courses";
    } else if (loggedIn && this.toggleMyCourses == "- Remove from my Courses") {
      this.removeFromUserCourses()
      this.toggleMyCourses = "+ Add to my Courses";
    } else {
      this.router.navigateByUrl("/log-in")
    }
  }

  async addToUsersCourses() {
    const username = await this.authService.getCurrentUserName();
    this.backend.addToUsersCourses(username, this.dataEntry.id);
  }

  async removeFromUserCourses() {
    const username = await this.authService.getCurrentUserName();
    this.backend.removeFromUserCourses(username, this.dataEntry.id);
  }

  calculateAverageRating() {
    if (this.debugging) {
      console.log(this.reviews);
    }
    let ratingSum: number = 0;
    for (let i = 0; i < this.reviews.length; i++) {
      ratingSum += this.reviews[i].rating;
      if (this.debugging) {
        console.log('currentRatingSum: ', ratingSum);
      }
    }
    this.averageRating = ratingSum / this.reviews.length;
  }
}
