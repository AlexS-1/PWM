import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating-hover',
  templateUrl: './app-star-rating-hover.component.html',
  styleUrls: ['./app-star-rating-hover.component.css']
})
export class AppStarRatingHoverComponent {
  @Input() rating: number = 0;
  @Output() ratingChanged = new EventEmitter<number>();

  onClick(index: number) {
    this.rating = index + 1;
    this.ratingChanged.emit(this.rating);
  }
}
