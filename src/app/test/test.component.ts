import { Component, OnInit } from '@angular/core';
import { AppFetchDataTsService } from './../app.fetch-data.ts.service';

@Component({
  selector: 'app-test',

  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  contentData:any;

  constructor(private fetchData:AppFetchDataTsService) {}

  ngOnInit(): void {
    this.fetchData.getContentData().subscribe((data) => {
      this.contentData = data;
    });
  }
}


