import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService) {
    
  }
  
  accountPath = "/create-account";
  accountButtonText = "Sign-Up →";

  ngOnInit() {
    this.checkLogIn()
  }

  async checkLogIn() {
    const isLoggedIn: boolean = await this.authService.isLoggedIn()
    if (isLoggedIn) {
      this.accountPath = "/my-account";
      this.accountButtonText = "My Area";
    } else {
      this.accountPath = "/create-account";
      this.accountButtonText = "Sign-Up →";
    }
  }
}
