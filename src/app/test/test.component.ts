import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendDataService } from '../core/backend-data.service';

import { HttpClient } from '@angular/common/http';

import courseData from './../../assets/content/courses.json';
import evaluationData from './../../assets/content/evaluations.json';
import userData from './../../assets/content/users.json';

import { Course } from '../models/course';
import { Evaluation } from '../models/evaluation';
import { User } from '../models/user';
import { AuthService } from '../core/auth-service.service';


  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })


export class TestComponent {
  items: Observable<any[]>;
  users: Observable<any[]>;
  text = "HI";
  
  constructor(
    db: AngularFirestore, 
    private backend: BackendDataService, 
    private http: HttpClient,
    private authService: AuthService) {
      this.items = db.collection('0').valueChanges();
      this.users = db.collection('1').valueChanges();
      new Promise<any>((resolve)=> {
        db.collection('loggedIn')
        .valueChanges()
        .subscribe(loggedIn => resolve(loggedIn));
      })  
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.authService.login("ale.sch.1@web.de", "StuddyBuddy@1")
  }


  jsonToFirestore() {
    const courses: Course[] = courseData
    for(let i = 0; i < courses.length; i++) {
      this.backend.addCourse(courses[i]);
    }
    const users: User[] = userData;
    for(let i = 0; i < users.length; i++) {
      this.backend.addUser(users[i]);
    }
    const evaluations: Evaluation[] = evaluationData
    for(let i = 0; i < evaluations.length; i++) {
      this.backend.addEvaluation(evaluations[i]);
    }
  }
   
  async firestoreToJSON() {    
    const firestoreCourses: Course[] = await this.backend.getAllCourses();
    for (let i = 0; i < firestoreCourses.length; i++) {
      courseData.push(firestoreCourses[i])
    }

    const firestoreEvaluations: Evaluation[] = await this.backend.getAllEvaluations();
    for (let i = 0; i < firestoreEvaluations.length; i++) {
      evaluationData.push(firestoreEvaluations[i])
    }

    const firestoreUsers: User[] = await this.backend.getAllUsers();
    for (let i = 0; i < firestoreUsers.length; i++) {
      userData.push(firestoreUsers[i])
    }
    
  }
}

