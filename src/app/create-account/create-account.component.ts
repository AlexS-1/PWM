import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  checkValidityPassword(passwordStirng: any) {
    var inputValue = passwordStirng.target.value;
     if (inputValue.match("(?=.*?[0-9])") == null) {
      console.log("Must contain a number");
    } else if (inputValue.match("(?=.*?[#?!@$%^&*-])") == null) {
      console.log("Must contain special character");
    } else if (inputValue.match("(?=.*?[A-Z])") == null) {
      console.log("Must contain a uppercase letter");
    } else if (inputValue.match("(?=.*?[a-z])") == null) {
      console.log("Must contain a lowercase letter");
    } else if (inputValue.match(".{8,}") == null) {
      console.log("Must be minimum 8 characters");
    }
    /*var String pswValue = this.password.nativeElement.
    if (this.password.value != this.repeatedPassword.value) {
      console.log("Must match");
    }*/
  }
}
