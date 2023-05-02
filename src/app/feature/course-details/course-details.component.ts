import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Evaluation } from 'src/app/models/evaluation';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { AuthService } from 'src/app/core/auth-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private backend: BackendDataService, private authService: AuthService) {

  }
  
  dataEntry: Course = {
    id: 0,
    title: '',
    description: '',
    createdByUserID: ''
  };

  reviews: Evaluation[] = [{
    username: "test",
    date: "2023-05-01",
    review: "test review",
    rating: 1,
    courseID: 1
  }];

  ngOnInit() {

    // Get information on loaded course
    this.route.params.subscribe(async (params) => {
      const id = params['id'];
      this.getCourseForID(id)
      this.getEvaluationsByCourseID(id)
      /*DEPRICATED: Loading from JSON
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
      this.reviews = commentData.filter((entry) => entry.courseID === parseInt(id, 10));
      Loading data from firebase backend
      console.log('loading course data');
      let docData = await this.backend.getCoursData(id);
      get data from firebase DocumentData
      console.log('docData: ', docData);
      if(docData != null){
        this.dataEntry = docData['data']();
      }*/
    });
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

  async addToUsersCourses() {
    console.log('currentCourseId: ', this.dataEntry.id);
    const username = await this.authService.getCurrentUserName();
    this.backend.addToUsersCourses(username, this.dataEntry.id);
  }
}
