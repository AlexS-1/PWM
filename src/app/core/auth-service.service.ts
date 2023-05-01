import { BackendDataService } from 'src/app/core/backend-data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDocs, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Variable to hold userdata arry
  private users: { id: number; email: string; password: string }[] = [];

  // variables to hold login status and role
  private loggedIn = false;
  private userRole = 'visitor';

  constructor(private http: HttpClient, private router: Router, private firestore: AngularFirestore, private backendDataService: BackendDataService) {
    // DEPRICATED: Use Firestor database
    // Perform loading of user data (only needed for json method)
    this.loadUsers();

    // Initialize login status vairables
    this.loggedIn = !!sessionStorage.getItem('loggedInToken');

    ////////////////
    // ATTENTION: // This will read the local chached last state. For testing make sure to be logged out befor testing anything
    ////////////////
    this.userRole = sessionStorage.getItem('role') || 'visitor';      // ToDo: add verification to set logged in user state if token is still valid
  }

  /////////////////////////////////
  /// Validation of credentials ///
  /////////////////////////////////

  // DEPRICATED: Use Firestor database
  // load user credential data from json file
  loadUsers() {
    return this.http.get<{ users: { id: number; email: string; password: string }[] }>('../assets/userdata/userLogInData.json').subscribe((data) => {
      this.users = data.users;
      //console.log(data);            // for debugging
      //console.log(this.users[0]);   // for debugging
    });
  }

  // DEPRICATED: Use Firestor database
  // Helper function to check entries in users[] loaded from database
  private findUserByMailAndPw(userEntry : { id: number; email: string; password: string }, email: string, password: string){
    return userEntry.email === email && userEntry.password === password ;
  }

  // Valifation function to be called by login function
  // Returns the first match for email+password pair in user data array
  private async validateCredentials(email: string, password: string): Promise<boolean> {
    let db = this.firestore.firestore;
    var query = db.collection('users').where('email' , '==', email).where('password' , '==', password);
    const querySnapshot = await getDocs(query);
    let userFound = false;
    querySnapshot.forEach((doc) => {
      if(doc.exists()){
        userFound = true;
      }
    });
    return userFound;
  }


  ///////////////////////
  /// Log-In handling ///
  ///////////////////////

  async login(email: string, password: string) : Promise<boolean>{
    let db = this.firestore.firestore;
    let succssfulLookup = await this.validateCredentials(email, password);      // check credentials with database

    console.log('lookup state', succssfulLookup);         // for debugging
    // TODO: Implement login logic and set role in local storage
    let successfulState = false;

    // On success enter login state in "loggedIn" collection and return docId as token,center email + time
    let data = {
      email,
      timestamp: Date.now()
    }
  
    if(succssfulLookup){
      let token = sessionStorage.getItem('logInToken');
      console.log('token: ', token);      // for debugging
      const tokenDoc = await this.backendDataService.getloggedInData(token);
      console.log('tokenDoc: ', tokenDoc);      // for debugging
      if(tokenDoc != null){
        if(!tokenDoc['exists']()){
          let newEntryDoc = await db.collection('loggedIn').add(data);
          sessionStorage.setItem('logInToken', newEntryDoc.id);                 // Add doc ID to session storage to be able to retrieve login state
        }else{
          /*  No verification at this point that email or timestamp is valid
              ToDo: implement checkup
          */
          console.log('Token exists');
        }
        successfulState = true; 
      }else{
        let newEntryDoc = await db.collection('loggedIn').add(data);
        sessionStorage.setItem('logInToken', newEntryDoc.id);                 // Add doc ID to session storage to be able to retrieve login state
        successfulState = true;
      }  
    }
    if(succssfulLookup && successfulState){
      console.log("Successfully logged in")  // for debugging
      this.router.navigate(['/home']);
    }else{
      console.log("Log in failed in auth-service.ts, logIn()")  // for debugging
    }
    return succssfulLookup && successfulState;
  }

  // Function to perfrorm logout and clear session storage
  // Sets login state to false, removes user role
  logout() : boolean{
    this.loggedIn = false;
    this.userRole = 'visitor';
    this.backendDataService.removeloggedInData(sessionStorage.getItem('logInToken'));
    sessionStorage.removeItem('logInToken');
    console.log("Successfully logged out")  // for debugging
    return true;
  }

  // Getter for login status, logged in = true
  isLoggedIn() : boolean{
    return this.loggedIn || !!sessionStorage.getItem('loggedInToken');   // for debugging;
  }

  // Getter for user role
  // 'visitor' = not loged in, 'user' = logged in user, 'admin'= logged in user with admin rights
  getUserRole() : string{
    this.userRole = sessionStorage.getItem('role') as string;
    return this.userRole;
  }
}

