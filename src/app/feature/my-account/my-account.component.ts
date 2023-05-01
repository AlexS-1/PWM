import { Component, OnInit } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { User } from 'src/app/core/user';
import { Evaluation } from 'src/app/core/evaluation';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent {
  constructor(private backend: BackendDataService) {

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
    //TODO pass only logged in user to get updated data
    const user = await this.backend.getUserData("user1");
    if (user.exists()) {
      this.user.firstName = user.data()['firstName'];
      this.user.surname = user.data()['surname'];
      this.user.email = user.data()['email'];
      this.user.dateOfBirth = user.data()['dateOfBirth'];
      this.user.profilePicture = user.data()['profilePicture'];
    }

    const evaluaions = await this.backend.getEvaluations("user1");
    console.log(evaluaions)
    evaluaions.forEach((doc) => {
      const evaluation: Evaluation = {
        username: doc.data()['username'],
        date: doc.data()['date'],
        review: doc.data()['review'],
        rating: doc.data()['rating'],
        courseID: doc.data()['courseID']
      }
      this.reviews.push(evaluation);
      console.log(this.reviews);
    });
  }
}
