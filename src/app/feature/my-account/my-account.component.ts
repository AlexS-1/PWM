import { Component, OnInit } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent {
  constructor(private bE: BackendDataService) {

  }

  declare imageUrl: string;

  user: User = {
    email: "",
    username: "",
    dateOfBirth: "",
    surname: "",
    firstName: "",
    password: "",
    courses: [],
    userID: "",
    profilePicture: ""
  };

  ngAfterViewInit() {
    console.log("Hi!")
    this.user.email = "f"
    this.user.username = "b"
    this.user.dateOfBirth = "2000-01-01"
    this.user.surname = "s"
    this.user.firstName = "a"
    this.user.password = ""
    this.user.courses = ["1", "2"]
  }

}
