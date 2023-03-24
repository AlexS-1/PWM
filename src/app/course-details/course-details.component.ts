import { Component, OnInit } from '@angular/core';
import { AppFetchDataTsService } from './../app.fetch-data.ts.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent {
  
  contentData:any;

  constructor(private fetchData:AppFetchDataTsService) {}

  ngOnInit(): void {
    this.fetchData.getContentData().subscribe((data) => {
      this.contentData = data;
    });
  }
}
