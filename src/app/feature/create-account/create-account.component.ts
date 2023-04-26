import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../core/auth-service.service';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc, getFirestore } from "firebase/firestore"

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

  constructor(private authService: AuthService, private firestore: AngularFirestore) {}

  checkValidityPasswords(password: any) {
    if (this.password == this.repeat_password) {
      this.passwordValidity = true;
    } else {
      this.passwordValidity = false;
    }
  }

  async onSubmit() {
    //TODO Submit information to .JSON
    const collectionReference = this.firestore.collection('users');
    const data = { 
      user_id: this.cyrb53(this.username), 
      username: this.username, 
      first_name: this.first_name, 
      surname: this.surname, email: 
      this.email, 
      dateOfBirth: this.date_of_birth, 
      password: this.password, 
      courses: [], 
      profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }


    let isNewUser: boolean;

    // Here: serach database for doc with name = this.cyrb53(this.username).toString()

    // Here: search database for email already in use

    // Here: set isNewUser if user or email is not already registerd
    isNewUser = true


    // Only add new user account if user is not already in the database
    if(isNewUser){
      // create a new doc with the userId as doc name
      await setDoc(doc(this.firestore.firestore, 'users', this.cyrb53(this.username).toString()), data);
    }else{
      // show error "user exists"
    }    
  }

  // 53-Bit hash function from https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
  cyrb53(str: string, seed = 0){
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };
}
