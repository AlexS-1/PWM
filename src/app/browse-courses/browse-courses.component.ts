import { Component, OnInit } from '@angular/core';
import { AppFetchDataTsService } from './../app.fetch-data.ts.service';


@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.css'],
  template: `
  <a href="course-details" routerLink="/course-details" routerLinkActive="active" ariaCurrentWhenActive="page" class="card">
      <div class="inner-box">

      </div>
      <div class="description" *ngFor="let item of data">
        {{item}}
      </div>
    </a>
  `
})
export class BrowseCoursesComponent implements OnInit {

  data:any;

  constructor(private fetchData:AppFetchDataTsService) {}

  ngOnInit(): void {
    console.log('reached OnInit')
    this.fetchData.getContentData().subscribe((data) => {
      this.data = data;
    });
    console.log('Loaded Data: ' + this.data);
  }  
}