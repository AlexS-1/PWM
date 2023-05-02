import { Component, OnInit } from '@angular/core';
import contentData from './../../../assets/content/course.json';
import { Course } from 'src/app/models/course';
import { BackendDataService } from 'src/app/core/backend-data.service';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.css']
})
export class BrowseCoursesComponent implements OnInit {
  constructor(private backend: BackendDataService) {

  }

  //Output to HTML
  courses: Course[] = [];

  ngOnInit(): void {
    this.loadSelectedCourses();
  }

  private async loadSelectedCourses() {
    this.courses = await this.backend.getAllCourses();
  }
}
