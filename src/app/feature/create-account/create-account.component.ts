import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../core/auth-service.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BackendDataService } from 'src/app/core/backend-data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  first_name = 'User';
  surname = 'Lastname';
  username = 'user1';
  date_of_birth = '';
  email = 'user1@example.com';
  password = 'UserPassword@1';
  repeat_password = 'UserPassword@2';

  passwordValidity = false;

  constructor(private authService: AuthService, private backendDataService: BackendDataService, private firestore: AngularFirestore) {}

  checkValidityPasswords(password: any) {
    if (this.password == this.repeat_password) {
      this.passwordValidity = true;
    } else {
      this.passwordValidity = false;
    }
  }

  async onSubmit() {
    let addSuccessfully = await this.backendDataService.addNewUser(this.username, this.first_name, this.surname, this.email, this.date_of_birth, this.password);

    // TODO: Show response on webpage if added successfully to database
    if(addSuccessfully){
      // Show response "OK"
    }else{
      // Shwo response "User/email already exists"
    }
  }
}
