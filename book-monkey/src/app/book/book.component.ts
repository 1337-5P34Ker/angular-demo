import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/shared/book';
import { BooksService } from 'app/services/books.service';

@Component({
  selector: 'bm-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  private sub: any;
  isbn: string;
  book: Book;  
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private bookService: BooksService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isbn = params['id'];
      this.bookService.getBook(this.isbn).then((result) =>{
        this.book = result;
        this.isLoading = false;
      });
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
