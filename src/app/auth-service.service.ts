import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { id: number; email: string; password: string }[] = [];

  constructor(private http: HttpClient) {
    this.loadUsers();
    //  console.log("constructor called");
  }

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
  validateCredentials(email: string, password: string): boolean {
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
}

