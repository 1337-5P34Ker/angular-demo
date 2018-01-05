import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { RedColoredDirective } from './red-colored.directive';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { BooksService } from 'app/books.service';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    RedColoredDirective,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
