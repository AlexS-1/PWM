import { Component, OnInit } from '@angular/core';
import contentData from './../../../assets/content/course.json';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.css']
})
export class BrowseCoursesComponent implements OnInit {
  contentData = contentData;

  ngOnInit(): void {}
}
