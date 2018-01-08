import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { RedColoredDirective } from './directives/red-colored.directive';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { BooksService } from 'app/services/books.service';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    RedColoredDirective,
    BookComponent,
    NotFoundComponent,
    HomeComponent,
    RatingComponent
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
