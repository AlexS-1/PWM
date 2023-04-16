import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Variable to hold userdata arry
  private users: { id: number; email: string; password: string }[] = [];

  // variables to hold login status and role
  private loggedIn = false;
  private userRole = 'visitor';

  constructor(private http: HttpClient) {
    // Perform loading of user data (only needed for json method)
    this.loadUsers();

    // Initialize login status vairables
    this.loggedIn = !!localStorage.getItem('token');
    this.userRole = localStorage.getItem('role') || 'visitor';
  }

  /////////////////////////////////
  /// Validation of credentials ///
  /////////////////////////////////

  loadUsers() {
    return this.http.get<{ users: { id: number; email: string; password: string }[] }>('../assets/userdata/userLogInData.json').subscribe((data) => {
      this.users = data.users;
      //console.log(data);            // for debugging
      //console.log(this.users[0]);   // for debugging
    });
  }

  // Helper function to check entries in users[] loaded from database
  private findUserByMailAndPw(userEntry : { id: number; email: string; password: string }, email: string, password: string){
    return userEntry.email === email && userEntry.password === password ;
  }

  // Valifation function to be called by service user
  // Returns the first match for email+password pair in user data array
  private validateCredentials(email: string, password: string): boolean {
    //const user = this.users.find((u) => u.email === email && u.password === password);
    for (let i=0; i<this.users.length; i++){
      if(this.findUserByMailAndPw(this.users[i], email, password)){
        // console.log("found user");     // for debugging
        // console.log(this.users[i]);    // for debugging
        return true;
      }
    }
    console.log("user not found in database");
    return false;
  }


  ///////////////////////
  /// Log-In handling ///
  ///////////////////////

  login(email: string, password: string) : boolean{
    let succssfulLookup = this.validateCredentials(email, password);
    // TODO: Implement login logic and set role in local storage
    let successfulState = true;   // True for testing

    console.log("Log-In state = " + this.loggedIn as string);   // for debugging
    console.log("User role = " + this.userRole as string);                // for debugging

    return succssfulLookup && successfulState;
  }

  // Function to perfrorm logout
  // Sets login state to false, removes user role
  logout() : boolean{
    // TODO: Remove credentials and role from local storage
    this.loggedIn = false;
    this.userRole = 'visitor';
    console.log("Successfully logged out")  // for debugging
    return true;
  }

  // Getter for login status, logged in = true
  isLoggedIn() : boolean{
    return this.loggedIn;
  }

  // Getter for user role
  // 'visitor' = not loged in, 'user' = logged in user, 'admin'= logged in user with admin rights
  getUserRole() : string{
    return this.userRole;
  }
}

