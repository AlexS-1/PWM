import { Component } from '@angular/core';
import { BackendDataService } from 'src/app/core/backend-data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  //Input from form
  first_name = 'User';
  surname = 'Lastname';
  username = 'user1';
  date_of_birth = '2000-01-01';
  email = 'user1@example.com';
  password = 'UserPassword@1';
  repeat_password = 'UserPassword@1';

  //Output to form
  message = "";

  //Other variables
  passwordValidity = false;

  constructor(private backendDataService: BackendDataService) {

  }

  checkValidityPasswords(password: any) {
    if (this.password == this.repeat_password) {
      this.passwordValidity = true;
    } else {
      this.passwordValidity = false;
    }
  }

  async onSubmit() {
    this.message = await this.backendDataService.addNewUser(this.username, this.first_name, this.surname, this.email, this.date_of_birth, this.password);
  }
}
