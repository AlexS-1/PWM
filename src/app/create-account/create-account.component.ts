import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  passwordStirng = "";
  repeatedpasswordString = "";

  checkValidityPassword(password: any) {
    this.passwordStirng = password.target.value;
     if (this.passwordStirng.match("(?=.*?[0-9])") == null) {
      console.log("Must contain a number");
    } else if (this.passwordStirng.match("(?=.*?[#?!@$%^&*-])") == null) {
      console.log("Must contain special character");
    } else if (this.passwordStirng.match("(?=.*?[A-Z])") == null) {
      console.log("Must contain a uppercase letter");
    } else if (this.passwordStirng.match("(?=.*?[a-z])") == null) {
      console.log("Must contain a lowercase letter");
    } else if (this.passwordStirng.match(".{8,}") == null) {
      console.log("Must be minimum 8 characters");
    }

    if (this.passwordStirng != this.repeatedpasswordString) {
      console.log("Must match");
    } else {
      console.log("Password matching");
    }
  }

  checkValidityRepeatedPassword(repeatedPassword: any) {
    this.repeatedpasswordString = repeatedPassword.target.value;
     if (this.repeatedpasswordString.match("(?=.*?[0-9])") == null) {
      console.log("Must contain a number");
    } else if (this.repeatedpasswordString.match("(?=.*?[#?!@$%^&*-])") == null) {
      console.log("Must contain special character");
    } else if (this.repeatedpasswordString.match("(?=.*?[A-Z])") == null) {
      console.log("Must contain a uppercase letter");
    } else if (this.repeatedpasswordString.match("(?=.*?[a-z])") == null) {
      console.log("Must contain a lowercase letter");
    } else if (this.repeatedpasswordString.match(".{8,}") == null) {
      console.log("Must be minimum 8 characters");
    }

    if (this.passwordStirng != this.repeatedpasswordString) {
      console.log("Must match");
    } else {
      console.log("Password matching");
    }
  }
}
