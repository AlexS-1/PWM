import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from './../../../assets/content/course.json';
import commentData from './../../../assets/content/comments.json';
import { Course } from 'src/app/shared/course';
import { Evaluation } from 'src/app/shared/evaluation';


interface DataEntry {
  id: number;
  title: string;
  description: string;
  userId: string;
  rating?: number;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  dataEntry: Course | undefined;
  reviews: Evaluation[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
      this.reviews = commentData.filter((entry) => entry.courseID === parseInt(id, 10));
    });
  }
}
