import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from './../../assets/content/course.json';
import commentData from './../../assets/content/comments.json';

interface DataEntry {
  id: number;
  title: string;
  description: string;
  userId: string;
}

interface CommentEntry {
  username: string;
  review: string;
  kurs_id: number;
  date: string;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  dataEntry: DataEntry | undefined;
  reviews: CommentEntry[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
      this.reviews = commentData.filter((entry) => entry.kurs_id === parseInt(id, 10));
    });
  }
}
