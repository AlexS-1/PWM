import { Component, OnInit } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { User } from 'src/app/models/user';
import { Evaluation } from 'src/app/models/evaluation';
import { AuthService } from 'src/app/core/auth-service.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent {
  constructor(private backend: BackendDataService, private authService: AuthService) {

  }

  reviews: Evaluation[] = []

  user: User = {
    userID: '',
    username: '',
    firstName: '',
    surname: '',
    email: '',
    dateOfBirth: '',
    password: '',
    courses: [],
    profilePicture: ''
  };

  ngAfterViewInit() {
    this.updateUserInformation();
    console.log("Im here");
  }

  async updateUserInformation() {
    this.user.username = await this.authService.getCurrentUserName();
    
    const user = await this.backend.getUserData(this.user.username);
    if (user.exists()) {
      this.user.firstName = user.data()['firstName'];
      this.user.surname = user.data()['surname'];
      this.user.email = user.data()['email'];
      this.user.dateOfBirth = user.data()['dateOfBirth'];
      this.user.profilePicture = user.data()['profilePicture'];
    }

    const evaluations = await this.backend.getEvaluationsForUser(this.user.username);
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
}
