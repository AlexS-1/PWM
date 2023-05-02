import { Component } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  //Input from form
  firstName = 'User';
  surname = 'Lastname';
  username = 'user1';
  dateOfBirth = '2000-01-01';
  email = 'user1@example.com';
  password = 'UserPassword@1';
  repeatedPassword = 'UserPassword@1';

  //Output to form
  message = "";

  //Other variables
  passwordValidity = false;

  constructor(private backendDataService: BackendDataService) {

  }

  checkValidityPasswords(password: any) {
    if (this.password == this.repeatedPassword) {
      this.passwordValidity = true;
    } else {
      this.passwordValidity = false;
    }
  }

  async onSubmit() {
    const user: User = {
      username: this.username,
      firstName: this.firstName,
      surname: this.surname,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      password: this.password,
      profilePicture: "",
      userID: "",
      courses: []
    }
    this.message = await this.backendDataService.addUser(user);
  }
}
