import { AuthService } from './../auth-service.service';
import { Component } from '@angular/core';


  /*@Component({
    selector: 'app-test',

    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })*/

@Component({
  selector: 'app-login',
  template: `
<div class="signup-form">
  <h2>Welcome !</h2>
  <div>{{email}}</div>
  <div>{{password}}</div>
  <form (submit)="onSubmit()">
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Email" [(ngModel)]="email" name="email" required>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Password" [(ngModel)]="password" required>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Login</button>
    </div>
    <div class="form-group text-center">
      <a href="forgot-password" routerLink="/forgot-password" routerLinkActive="active" ariaCurrentWhenActive="page">Forgot Password?</a>
      <a href="create-account" routerLink="/create-account" routerLinkActive="active" ariaCurrentWhenActive="page">Don't have an Account yet?</a>
    </div>
  </form>
</div>
    <form (submit)="onSubmit()">
      <label>
        Username:
        <input type="email" [(ngModel)]="username" name="username" required/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" [(ngModel)]="password" name="password" required/>
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
    <div>{{username}}</div>
    <div>{{password}}</div>
  `,
})
export class TestComponent {
  email: string = 'e';
  password: string = 'p1';
  password2: string = 'p2';
  username: string = 'u';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const isValid = this.authService.login(this.username, this.password);
    if (isValid) {
      // perform login
    } else {
      // display error message
    }
  }
}

