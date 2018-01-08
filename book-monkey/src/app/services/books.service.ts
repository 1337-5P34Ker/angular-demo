import { Book } from './../shared/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Thumbnail } from '../shared/thumbnail';


@Injectable()
export class BooksService {

 baseURI:string = "http://localhost/"; // die books.json liegt bei mir im lokalen IIS

 constructor(private http:Http) {
 }

  // alle Bücher
  getBooks(): Promise<Book[]>{
    return new Promise<Book[]>((resolve, reject) => {      
      const apiURL = `${this.baseURI}books.json`;
      this.http.get(apiURL)
        .toPromise()
        .then(response => resolve(response.json() as Book[]))
        .catch(error =>reject(error));
    });
  }
  // bestimmtes Buch
  getBook(isbn: number): Promise<Book>{

    return new Promise<Book>((resolve, reject) => {      
      const apiURL = `${this.baseURI}books.json`;
      this.http.get(apiURL)
        .toPromise()
        .then(response => resolve(response.json().find(book => book.isbn === isbn) as Book))
        .catch(error =>reject(error));
    });
  }
}
