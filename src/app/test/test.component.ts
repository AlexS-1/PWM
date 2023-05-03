import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendDataService } from '../core/backend-data.service';

import courseData from './../../assets/content/course.json';
import evaluationData from './../../assets/content/comments.json';
import userData from './../../assets/content/user.json';

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
  
  constructor(db: AngularFirestore, private backend: BackendDataService){
    this.items = db.collection('0').valueChanges();
    this.users = db.collection('1').valueChanges();
  }

  ngOnInit() {
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
    
}

