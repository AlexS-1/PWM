import { Component, OnInit } from '@angular/core';
import { AppFetchDataTsService } from './../app.fetch-data.ts.service';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.css']
})
export class BrowseCoursesComponent implements OnInit {
  contentData:any;

  constructor(private fetchData:AppFetchDataTsService) {}

  ngOnInit(): void {
    this.fetchData.getContentData().subscribe((data) => { //get the data from the fetch service
      this.contentData = data;
    });
  }
}
