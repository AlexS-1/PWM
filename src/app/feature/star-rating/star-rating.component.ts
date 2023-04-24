import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Output() ratingChanged = new EventEmitter<number>();
  maxRating = 5;
  stars: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.rating); // Hier wurde das console.log hinzugefügt
    for (let i = 1; i <= this.maxRating; i++) {
      this.stars.push(i <= this.rating);
    }
  }

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingChanged.emit(this.rating);
  }
}
