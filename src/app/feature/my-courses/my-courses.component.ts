import { Component, OnInit } from '@angular/core';
import jsonData from './../../../assets/content/course.json';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: any[] = [];
  selectedCourseIds = [1, 2]; // Liste der ausgewählten Kurs-IDs

  ngOnInit(): void {
    this.loadSelectedCourses();
  }

  private loadSelectedCourses(): void {
    this.courses = jsonData.filter(course => this.selectedCourseIds.includes(course.id));
  }
}
