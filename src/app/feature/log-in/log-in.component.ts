import { FormGroup } from '@angular/forms';
import { AuthService } from './../../core/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) {}



  async onSubmit() {
    const isValid = await this.authService.login(this.email, this.password);
    /*console.log("onSubmit() function called"); // for debugging
    console.log("email value:", this.email); // for debugging
    console.log("password value:", this.password); // for debugging */
    if (isValid) {
      // perform login
      console.log("perform log-in");  // For DEBUGGGING
    } else {
      // display error message
      console.log("invalid log-in data"); // For DEBUGGGING
    }
  }
}
