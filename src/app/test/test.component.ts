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


  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })


export class TestComponent {
  items: Observable<any[]>;
  users: Observable<any[]>;
  
  constructor(db: AngularFirestore, private backend: BackendDataService, private http: HttpClient){
    this.items = db.collection('0').valueChanges();
    this.users = db.collection('1').valueChanges();
  }

  jsonToFirestore() {
    const courses: Course[] = courseData
    for(let i = 0; i < courses.length; i++) {
      this.backend.addCourse(courses[i]);
    }
    const evaluations: Evaluation[] = evaluationData
    for(let i = 0; i < evaluations.length; i++) {
      this.backend.addEvaluation(evaluations[i]);
    }
    const users: User[] = userData;
    for(let i = 0; i < users.length; i++) {
      this.backend.addUser(users[i]);
    }
  }
   
  async firestoreToJSON() {
    const jsonCourses: Course[] = courseData
    const firestoreCourses: Course[] = await this.backend.getAllCourses();
    for(let i = 0; i < jsonCourses.length; i++) {
      courseData.pop();
    }
    for (let i = 0; i < firestoreCourses.length; i++) {
      courseData.push(firestoreCourses[i])
    }

    const jsonEvaluations: Evaluation[] = evaluationData
    const firestoreEvaluations: Evaluation[] = await this.backend.getAllEvaluations();
    for(let i = 0; i < jsonEvaluations.length; i++) {
      evaluationData.pop();
    }
    for (let i = 0; i < firestoreEvaluations.length; i++) {
      evaluationData.push(firestoreEvaluations[i])
    }

    const jsonUsers: User[] = userData
    const firestoreUsers: User[] = await this.backend.getAllUsers();
    for(let i = 0; i < jsonUsers.length; i++) {
      userData.pop();
    }
    for (let i = 0; i < firestoreUsers.length; i++) {
      userData.push(firestoreUsers[i])
    }
  }
}

