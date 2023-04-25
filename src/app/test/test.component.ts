import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


  @Component({
    selector: 'app-test',

    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })


export class TestComponent {
  items: Observable<any[]>;
  users: Observable<any[]>;
  
  constructor(db: AngularFirestore){
    this.items = db.collection('0').valueChanges();
    this.users = db.collection('1').valueChanges();
  }

  
    
}

