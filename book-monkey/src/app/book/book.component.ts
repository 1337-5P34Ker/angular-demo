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
  isbn: number;
  book: Book;  
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private bookService: BooksService) { }

  ngOnInit() {
    this.sub = this.route.paramMap
    .subscribe(params => {
      this.isbn = +params.get('isbn'); // + converts string into number
      this.bookService.getBook(this.isbn).then((result) =>{
        this.book = result;
        this.isLoading = false;
      });
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  notify(rating: number){
    this.book.rating = rating;
    console.log('speichere neues Rating: ' + rating);
  }
}
