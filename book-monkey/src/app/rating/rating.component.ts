import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bm-rating',
  templateUrl: './rating.component.html',
  styles: []
})
export class RatingComponent implements OnInit {

  @Input()
  rating: number; // kommt aus [rating]="book.rating" in der BookComponent
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  stars: Array<boolean>;
  constructor() { }

  ngOnInit() {
    this.stars = [false,false,false,false,false];
    for(let index = 0; index <= this.rating; index++){
      this.stars[index] = true;
    }
  }

  onRating(rating: number){
    this.rating = rating;
    this.ngOnInit();
    this.rated.emit(rating);
  }
}
