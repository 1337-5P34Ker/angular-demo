import { BooksService } from '../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Thumbnail } from '../shared/thumbnail';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(bookService: BooksService){
     this.books = bookService.getBooks();
  }

  ngOnInit() {  
  }
}
