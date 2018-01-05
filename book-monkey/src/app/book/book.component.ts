import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/shared/book';

@Component({
  selector: 'bm-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  private sub: any;
  isbn: number;
  book: Book;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isbn = parseInt(params['id']);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
